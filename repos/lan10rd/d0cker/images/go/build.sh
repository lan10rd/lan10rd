docker buildx build --platform linux/arm64,linux/amd64 \
   --rm --push --compress -t lanl0rd/go:latest -f ./Dockerfile . \
    && docker save lanl0rd/go:latest | gzip > go.tar.gz