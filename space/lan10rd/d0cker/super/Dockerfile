FROM --platform=$TARGETPLATFORM ubuntu AS build
ARG TARGETPLATFORM
ARG BUILDPLATFORM

WORKDIR /app
COPY dockerfile.sh /tmp/  
RUN chmod u+x /tmp/dockerfile.sh && TARGETPLATFORM=$TARGETPLATFORM BUILDPLATFORM=$BUILDPLATFORM /tmp/dockerfile.sh
ENV PATH "$PATH:/usr/local/go/bin"
USER super
WORKDIR /home/super
ENTRYPOINT ["/bin/bash"]