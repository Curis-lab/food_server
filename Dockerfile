FROM node:18

RUN npm install -g nodemon

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .


CMD [ "npm", "run", "dev" ]