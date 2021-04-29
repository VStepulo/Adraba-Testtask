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

## Add the wait script to the image
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.8.0/wait /wait
RUN chmod +x /wait

## Launch the wait tool and then your application
CMD /wait && node index.js
##CMD ["node", "index.js"]
COPY . /usr/src/app

EXPOSE ${MONGO_PORT}
EXPOSE 3000
