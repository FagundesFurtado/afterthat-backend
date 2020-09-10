FROM keymetrics/pm2:latest-alpine

WORKDIR /app
COPY . .

CMD [ "pm2-runtime", "start", "pm2.json" ]