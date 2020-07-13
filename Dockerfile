# build stage
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY . .
RUN npm ci --silent
RUN npm run build

# production stage
FROM nginx as production-stage
WORKDIR /usr/share/nginx/html
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
