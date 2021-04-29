FROM node:lts-buster-slim

#Argument that is passed from docer-compose.yaml file
ARG MONGO_PORT
#Echo the argument to check passed argument loaded here correctly
RUN echo "Argument port is : $MONGO_PORT"

# Create app directory
WORKDIR /usr/src/app

COPY package.json /usr/src/app/package.json
COPY index.js /usr/src/app/index.js
RUN npm install
COPY . /usr/src/app

EXPOSE ${MONGO_PORT}
EXPOSE 3000

CMD ["node", "index.js"]