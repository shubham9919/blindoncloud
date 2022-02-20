FROM node:17.4.0-alpine

EXPOSE 3000

# ENV NODE_OPTIONS=--openssl-legacy-provider

RUN mkdir -p /usr/src/app/cloud-tech

WORKDIR /usr/src/app/cloud-tech

COPY package.json package.json

RUN npm install

COPY . .

RUN yarn build

CMD ["yarn", "start"]

