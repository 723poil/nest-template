FROM --platform=linux/amd64 node:20-alpine

ARG DOMAIN=domain
ARG MODE=mode

ENV ENV_FILE="$MODE.env"
#ENV CONFIG_FILE="config.js"
ENV DIST_PATH="./dist/main.js"
ENV RUN_FILE="main.js"
ENV MODE=$MODE

WORKDIR /usr/src/app

RUN apk update && apk add bash
RUN apk add --no-cache bash
RUN apk --no-cache add tzdata && \
    cp /usr/share/zoneinfo/Asia/Seoul /etc/localtime && \
    echo "Asia/Seoul" > /etc/timezone \
    apk del tzdata

COPY package*.json ./
RUN npm install

#RUN npm install --global pm2

COPY ./$ENV_FILE ./
#COPY ./$CONFIG_FILE ./
# COPY ./public ./public
COPY $DIST_PATH ./

EXPOSE 3001

RUN echo "$RUN_FILE"

#CMD ["sh", "-c", "pm2-runtime start $CONFIG_FILE"]
CMD ["sh", "-c", "npx cross-env MODE=$MODE PORT=3001 LOG_DIR=./logs/ node $RUN_FILE"]