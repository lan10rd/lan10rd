docker buildx build --platform linux/arm/v5,linux/amd64 --rm --push --compress -t lan10rd/redis:latest -f ./Dockerfile .