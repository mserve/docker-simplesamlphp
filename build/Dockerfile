FROM amd64/php:7.0.33-apache
ENV APACHE_DOCUMENT_ROOT /code/www
RUN apt-get update && apt-get install -y --no-install-recommends \
  curl \
  git \
  libmemcached-dev \
  libpng-dev \
  unzip \
  zlib1g-dev \
  && rm -rf /var/lib/apt/lists/*
RUN docker-php-ext-install -j5 gd mbstring mysqli pdo pdo_mysql \
   && pecl install memcached redis \
   && docker-php-ext-enable memcached redis 
RUN pecl install xdebug-2.5.0 \
    && docker-php-ext-enable xdebug   
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN a2dismod mpm_event && a2enmod mpm_prefork
COPY apache2.conf /etc/apache2/
COPY mpm_prefork.conf /etc/apache2/mod_available/
COPY php.ini /usr/local/etc/php/php.ini
COPY startup.sh /
ENTRYPOINT ["/startup.sh"]
CMD ["php", "-S", "0.0.0.0:8732", "-t", "/code/www"]
