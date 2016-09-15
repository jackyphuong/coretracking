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

COPY package.json /usr/src
COPY gulpfile.js /usr/src
COPY tsconfig.json /usr/src
COPY typings.json /usr/src

RUN gulp

EXPOSE 3000
CMD [ "gulp", "serve:prod" ]




