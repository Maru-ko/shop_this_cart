FROM node:alpine

ENV ME_CONFIG_MONGODB_ADMINUSERNAME=team8 \
    ME_CONFIG_MONGODB_ADMINPASSWORD=vyYuchd5rV2QAb0k

RUN mkdir -p /usr/shopkart

COPY . .

WORKDIR /usr/shopkart/client

RUN npm install

# RUN npm start

# RUN cd ../client

# RUN npm install

CMD ["npm", "start"]