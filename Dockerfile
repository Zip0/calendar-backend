FROM node:16-alpine
 
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
 
COPY package.json /usr/src/app/
RUN npm install
 
COPY . /usr/src/app

# RUN npm run build
 
# USER node

EXPOSE 4000

CMD [ "npm", "run", "start:dev" ]