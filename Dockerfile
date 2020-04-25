FROM node
RUN mkdir -p /home/node/app/node_modules
WORKDIR /home/node/app
COPY ./public ./public
COPY ./src ./src
COPY ./package.json ./

EXPOSE 3000

RUN npm install -g react-script --silent
# install and start app through sh command
# CMD sh -c 'npm install && npm start'
RUN npm install
CMD npm start