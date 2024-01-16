FROM nginx:latest
WORKDIR /usr/share/nginx/html
COPY ./groot/index.html index.html
COPY ./groot ./

 