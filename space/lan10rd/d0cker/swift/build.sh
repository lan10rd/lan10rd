docker buildx build --platform linux/arm64,linux/amd64 \
   --rm --push --compress -t lanl0rd/swift:latest -f ./Dockerfile . \
    && docker save lanl0rd/swift:latest | gzip > swift.tar.gz