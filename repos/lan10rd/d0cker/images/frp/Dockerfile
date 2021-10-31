FROM --platform=$TARGETPLATFORM ubuntu:latest AS build
ARG TARGETPLATFORM
ARG BUILDPLATFORM
COPY . /tmp/docker
RUN ls -la /tmp/ && ls -la /tmp/docker || true && chmod u+x /tmp/docker/dockerfile.sh && TARGETPLATFORM=$TARGETPLATFORM BUILDPLATFORM=$BUILDPLATFORM /tmp/docker/dockerfile.sh
WORKDIR /etc/frp
