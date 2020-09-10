FROM keymetrics/pm2:latest-alpine

WORKDIR /app

CMD [ "pm2-runtime", "start", "pm2.json" ]