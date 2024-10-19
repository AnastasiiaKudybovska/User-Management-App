FROM node:16 AS build

WORKDIR /src

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=build /src/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]


# docker build -t my-test-app .
# docker run -d -p 8080:80 --name my-test-app my-test-app
# docker ps -a
# docker logs my-test-app
# docker stop my-test-app
# docker rm my-test-app