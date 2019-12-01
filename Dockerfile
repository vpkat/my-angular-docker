FROM httpd

COPY ./dist/Angular/* /usr/local/apache2/htdocs/

EXPOSE 80

CMD apachectl -D FOREGROUND