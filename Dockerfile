FROM node:16
WORKDIR /src
COPY package.json /src
COPY yarn.lock /src
RUN yarn install
COPY . /src
CMD yarn run dev
EXPOSE 7002
