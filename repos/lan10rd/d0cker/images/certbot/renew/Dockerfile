FROM --platform=$TARGETPLATFORM lanl0rd/certbot AS build
ARG TARGETPLATFORM
ARG BUILDPLATFORM

RUN apt install -y ca-certificates && update-ca-certificates