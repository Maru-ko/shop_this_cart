FROM node:lts-alpine
# ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY . .
COPY package*.json ./
RUN npm install parcel
RUN npm install
EXPOSE 1234
CMD ["npm", "run", "dev"]