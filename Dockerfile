FROM mhart/alpine-node:8.6.0

COPY . /var/ui
WORKDIR /var/ui

RUN yarn
RUN yarn build
RUN rm -rf node_modules
RUN yarn global add http-server
CMD http-server ./build -p 3000 -d false
