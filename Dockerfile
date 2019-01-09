FROM node:latest

EXPOSE 8080

COPY ./ /var/wwww/app

WORKDIR /var/www/app

RUN npm install
CMD npm start