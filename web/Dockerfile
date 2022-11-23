FROM node:latest

# set working directory
WORKDIR /app

# install dependencies
COPY package.json .
RUN npm install

# copy source code
COPY . .

# run development server
CMD ["npm", "run", "dev"]