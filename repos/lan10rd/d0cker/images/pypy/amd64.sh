docker buildx build --platform linux/arm64,linux/amd64 \
    --rm --compress --cache-from=python:latest -t lanl0rd/py:amd64 -f ./Dockerfile.amd64 . \
    && docker save lanl0rd/py:amd64 | gzip > py-amd64.tar.gz