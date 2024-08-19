FROM node:22-alpine3.19

WORKDIR /food

COPY . /food

RUN npm install -f

EXPOSE 8080

CMD [ "npm","run","dev" ]