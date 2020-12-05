FROM node:12.20-alpine3.10

WORKDIR /app/usr/src/

COPY . .

RUN npm install
RUN npm test

CMD [ "npm", "start" ]