FROM node:12.18.3

WORKDIR /ez-apply-backend

COPY ./package.json /ez-apply-backend
COPY ./package-lock.json /ez-apply-backend

RUN npm install

COPY ./ /ez-apply-backend

CMD ["node", "index.js"]

EXPOSE 5000