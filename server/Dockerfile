FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 5001
RUN npm install
USER node
CMD ["npm", "run", "start"]