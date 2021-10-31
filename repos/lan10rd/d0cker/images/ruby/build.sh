docker buildx build --platform linux/arm64,linux/amd64 \
   --rm --push --compress -t lanl0rd/ruby:latest -f ./Dockerfile . \
    && docker save lanl0rd/ruby:latest | gzip > ruby.tar.gz