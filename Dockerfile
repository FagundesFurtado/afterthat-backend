FROM keymetrics/pm2:latest-alpine

WORKDIR /app
COPY . .
RUN npm install 

CMD [ "pm2-runtime", "start", "pm2.json" ]