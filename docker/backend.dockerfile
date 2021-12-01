# if you want to run seperately without docker-compose use: 
# docker build -f '../docker/backend.dockerfile' -t ez-apply_backend ../backend  
# docker run --name ez-apply_backend -d -p 5000:5000 ez-apply_backend
FROM node:12.18.3

WORKDIR /ez-apply-backend

COPY ./package.json /ez-apply-backend
COPY ./package-lock.json /ez-apply-backend

RUN npm install

COPY ./ /ez-apply-backend

CMD ["node", "index.js"]

EXPOSE 5000