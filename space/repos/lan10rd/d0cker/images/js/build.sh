docker buildx build --platform linux/arm64,linux/amd64 \
    --rm --push --compress -t lan10rd/js:latest -f ./Dockerfile .