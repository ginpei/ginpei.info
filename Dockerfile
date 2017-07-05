FROM node:8.1.2

RUN mkdir /app
WORKDIR /app

ADD ./package.json package.json
RUN npm install
