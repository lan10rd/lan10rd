docker buildx build --platform linux/arm64,linux/amd64 \
   --rm --push --compress -t lanl0rd/java:latest -f ./Dockerfile . \
    && docker save lanl0rd/java:latest | gzip > java.tar.gz