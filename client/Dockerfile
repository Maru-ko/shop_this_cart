FROM node:lts-alpine

ENV NODE_ENV=production

WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

# RUN npm install

EXPOSE 1234

CMD ["npm", "run", "dev"]

# FROM node:alpine

# WORKDIR /client/src/omponents

# COPY . .

# RUN apk update &&\
#     apk upgrade &&\
#     apk add nodejs npm

# # Install app dependencies
# COPY package*.json ./


# RUN npm install -g

# EXPOSE 1234

# CMD ["npx", "parcel", "./index.html"]




# FROM node

# WORKDIR /home/cart-server

# COPY . .

# RUN npm install

# EXPOSE 5001

# CMD ["node", "index.js"]