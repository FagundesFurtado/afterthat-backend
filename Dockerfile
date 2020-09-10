FROM keymetrics/pm2:latest-alpine

WORKDIR /app
COPY . .
RUN npm install --production

CMD [ "pm2-runtime", "start", "pm2.json" ]