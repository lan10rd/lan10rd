docker buildx build --platform linux/arm64 \
   --rm --compress --cache-from=python:latest -t lanl0rd/py:arm64 -f ./Dockerfile.arm64 . \
    && docker save lanl0rd/py:arm64 | gzip > py-arm64.tar.gz