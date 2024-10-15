#!/bin/bash

# Load environment variables from .env file
#export $(grep -v '^#' .env | xargs)
set -a
while IFS='=' read -r key value; do
  if [[ $key != \#* ]]; then
    export "$key=$value"
  fi
done < .env
set +a

DOCKER_YML="docker-compose.${DOMAIN}.yml"

# Function to check if a container is running
is_container_running() {
  docker ps --format '{{.Names}}' | grep -q "${DOMAIN}_blue"
}

is_prod() {
  domain=$1

  if [ "$domain" = "prod" ]; then
    echo "domain is prod."
    return 0 # 성공
  else
    return 1 # 실패
  fi
}

# Function to start a specific service
start_service_blue() {
  docker-compose -f "$DOCKER_YML" --env-file .env up -d --build blue
}

start_service_green() {
  docker-compose -f "$DOCKER_YML" --env-file .env up -d --build green
}

stop_service_blue() {
  docker-compose -f "$DOCKER_YML" stop blue
}

stop_service_green() {
  docker-compose -f "$DOCKER_YML" stop green
}

# Check if agent_blue is running
if is_container_running && is_prod "$MODE"; then
  echo "${DOMAIN}_blue is running. Starting ${DOMAIN}_green..."
  stop_service_green
  start_service_green
elif is_prod "$MODE"; then
  echo "${DOMAIN}_blue is not running. Starting ${DOMAIN}_blue..."
  stop_service_blue
  start_service_blue
else
  echo "server is develop. Start all node..."
  stop_service_green
  start_service_green
  stop_service_blue
  start_service_blue
fi

# 운영서버에서만 적용
echo "setup apache..."
if is_container_running && is_prod "$MODE"; then
  # 아파치 설정


  stop_service_blue
elif is_prod "$MODE"; then

  stop_service_green
fi