ARG NODE_VERSION=20.15.0-alpine

FROM node:$NODE_VERSION

WORKDIR /food

COPY . /food

RUN npm install

EXPOSE 8080

CMD [ "npm","run","dev" ]