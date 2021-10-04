FROM --platform=$TARGETPLATFORM openjdk:17-jdk-buster AS build
ARG TARGETPLATFORM
ARG BUILDPLATFORM

WORKDIR /app
COPY dockerfile.sh /tmp/  
RUN chmod u+x /tmp/dockerfile.sh && TARGETPLATFORM=$TARGETPLATFORM BUILDPLATFORM=$BUILDPLATFORM /tmp/dockerfile.sh