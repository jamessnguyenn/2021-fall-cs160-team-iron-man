# if you want to run seperately without docker-compose use: 
# docker build -f '../docker/frontend.dockerfile' -t ez-apply_frontend ../frontend
# docker run --name ez-apply_frontend -d -p 3000:3000 ez-apply_frontend
FROM node:12.18.3

WORKDIR /ez-apply

COPY ./package.json /ez-apply
COPY ./package-lock.json /ez-apply

RUN npm install

COPY ./ /ez-apply

CMD ["npm", "start"]

EXPOSE 3000