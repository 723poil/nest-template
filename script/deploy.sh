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

stop_service_blue() {
  docker-compose -f "$DOCKER_YML" stop blue
}


stop_service_blue
start_service_blue