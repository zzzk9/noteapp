FROM node:18-alpine AS builder
WORKDIR /frontend
COPY . .
RUN npm install
RUN npm run build

FROM nginx
COPY --from=builder /frontend/build /usr/share/nginx/html
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]