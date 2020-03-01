FROM node:alpine3.10

WORKDIR /app

COPY . .

ARG VUE_APP_STRIPE_PK
ARG VUE_APP_AUTH_URL
ARG VUE_APP_API_URL
RUN npm install
RUN npm install  @vue/cli

CMD ["npm", "run", "serve"]