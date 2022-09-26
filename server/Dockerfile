FROM node:lts-alpine
WORKDIR /
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
COPY . .
EXPOSE 5001
RUN npm install
USER node
CMD ["npm", "run", "start"]