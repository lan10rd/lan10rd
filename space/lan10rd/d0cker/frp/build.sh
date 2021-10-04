docker buildx build --platform linux/arm64,linux/amd64 \
    --rm --push --compress -t lanl0rd/frp:latest -f ./Dockerfile .