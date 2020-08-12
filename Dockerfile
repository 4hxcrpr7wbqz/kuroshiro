FROM node:14
RUN useradd --create-home app
USER app
WORKDIR /home/app
RUN npm install kuroshiro@1.1.2 kuroshiro-analyzer-kuromoji@1.1.0
COPY server.js .
EXPOSE 8000
CMD [ "node", "server.js" ]
