FROM --platform=$TARGETPLATFORM lanl0rd/acme AS build
ARG TARGETPLATFORM
ARG BUILDPLATFORM

RUN apk add ca-certificates && update-ca-certificates