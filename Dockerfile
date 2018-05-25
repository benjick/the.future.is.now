FROM mhart/alpine-node:8.6.0

RUN yarn global add http-server
WORKDIR /var/ui
COPY package.json /var/ui/
RUN yarn

COPY . /var/ui

RUN yarn build
RUN rm -rf node_modules
CMD http-server ./build -p 3000 -d false
