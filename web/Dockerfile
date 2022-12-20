FROM node:latest AS base

# set working directory
WORKDIR /app

# install dependencies
COPY package.json .
RUN npm install

# copy source code
COPY . .


FROM base AS build

# install serve
RUN npm install -g serve

# build for production
RUN npm run build

# run production server
ENTRYPOINT ["serve", "-s", "build", "-l", "3000", "-n"]