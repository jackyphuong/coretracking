FROM node:6

RUN npm install -g typings gulp
RUN mkdir -p /usr/src
WORKDIR /usr/src

COPY package.json /usr/src
COPY gulpfile.js /usr/src
COPY tsconfig.json /usr/src
COPY typings.json /usr/src
RUN npm i
RUN typings i

COPY ./www /usr/src
COPY ./typings /usr/src
COPY ./server /usr/src
COPY ./scss /usr/src

EXPOSE 3000
CMD [ "gulp", "serve:prod" ]




