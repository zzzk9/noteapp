FROM node:18.20.4-alpine3.20
WORKDIR /backend
COPY . .
RUN apk --no-cache add curl
RUN npm install
CMD [ "node", "server.js" ]
EXPOSE 8080