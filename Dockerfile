FROM keymetrics/pm2:12-alpine

WORKDIR /app
COPY . .
RUN npm install --production

CMD [ "pm2-runtime", "start", "pm2.json" ]