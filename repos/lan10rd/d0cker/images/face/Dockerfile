FROM --platform=$TARGETPLATFORM lanl0rd/face:dorowu AS build
ARG TARGETPLATFORM
ARG BUILDPLATFORM

WORKDIR /app
COPY dockerfile.sh /tmp/  
RUN chmod u+x /tmp/dockerfile.sh && TARGETPLATFORM=$TARGETPLATFORM BUILDPLATFORM=$BUILDPLATFORM /tmp/dockerfile.sh