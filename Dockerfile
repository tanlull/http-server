FROM node:16-alpine
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "./"]
# Dev
#RUN npm install
# production
RUN npm ci --only=production
ENV NODE_ENV production
COPY ./ ./
CMD [ "node", "app.js" ]