FROM node:16

ARG PROFILES
ENV SET_PROFILE="$PROFILES"

RUN mkdir /app
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY . /app/

RUN npm install yarn --force
RUN yarn global add serve
RUN yarn run build:$SET_PROFILE

EXPOSE 3000

CMD ["npx", "serve",  "-s",  "build"]