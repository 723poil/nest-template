#!/bin/sh

PULL_MODE=$1

TZ=Asia/Seoul

apk --no-cache add tzdata && \
  cp /usr/share/zoneinfo/$TZ /etc/localtime && \
  echo $TZ > /etc/timezone

cat /etc/timezone

docker-compose -f docker-compose.test.yml stop db
docker-compose -f docker-compose.test.yml rm -f -v
docker-compose -f docker-compose.test.yml up -d

echo "Waiting for the service to be available on port 3307..."

sleep 10

SERVICE_IP=$(docker inspect --format '{{ range .NetworkSettings.Networks }}{{ .IPAddress }}{{ end }}' nest-nest-db-1)

if [[ $PULL_MODE == "local" ]]; then 
  SEED_SERVER="localhost"
else
  SEED_SERVER="host.docker.internal"
fi

echo "Service is now available on port 3307."

npm i -g ts-node

# DEV 또는 PROD DB 스키마 정보 불러오기
ts-node prisma/generate.db.schema.js && npx dotenv -e ${PULL_MODE}.env -- npx prisma db pull --schema=prisma/db.schema.prisma
npm run prisma:generate

# 테스트용 DB 마이그레이션
npm run prisma:migrate:test

# SEED DATA 삽입
cross-env MODE=${PULL_MODE} SEED_SERVER=${SEED_SERVER} ts-node --compiler-options {\"module\":\"CommonJS\"} prisma/seed/seed.ts

# 테스트 진행
cross-env MODE=test TZ=Asia/Seoul LOG_DIR=logs/ jest --runInBand