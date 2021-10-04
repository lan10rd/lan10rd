docker buildx build --platform linux/arm64,linux/amd64 \
   --rm --push --compress -t lanl0rd/py:latest -f ./Dockerfile . && \
docker save lanl0rd/py:latest | gzip > py.tar.gz