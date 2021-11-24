FROM node:12.18.3

WORKDIR /ez-apply

COPY ./package.json /ez-apply
COPY ./package-lock.json /ez-apply

RUN npm install

COPY ./ /ez-apply

CMD ["npm", "start"]

EXPOSE 3000