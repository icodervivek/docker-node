FROM node:18-alpine

COPY package.json package.json
COPY package-lock.json package-lock.json 
COPY main.js main.js

RUN npm install
ENTRYPOINT [ "node", "main.js" ]