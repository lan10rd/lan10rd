docker buildx build --platform linux/arm64,linux/amd64 \
   --rm --push --compress -t lanl0rd/php:latest -f ./Dockerfile . \
    && docker save lanl0rd/php:latest | gzip > php.tar.gz