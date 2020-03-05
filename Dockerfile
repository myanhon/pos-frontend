# build stage
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY . .
RUN npm ci --silent
ARG STRIPE_PK
ARG AUTH_URL
ARG API_URL
RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]





#FROM nginx
#
#RUN apt-get update && apt-get install jq -y
#
#WORKDIR /usr/share/nginx/html
#COPY . .
#
#ENTRYPOINT [ "./entrypoint.sh" ]
#CMD ["nginx", "-g", "daemon off;"]



#FROM node:alpine3.10
#
#WORKDIR /app
#
#COPY . .
#
#
#CMD ["npm", "run", "serve"]