docker buildx build --platform linux/arm64 \
   --rm --load --compress -t lanl0rd/py:latest -f ./Dockerfile . \
    && docker save lanl0rd/py:latest | gzip > py-arm.tar.gz