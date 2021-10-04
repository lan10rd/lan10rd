#!/bin/bash
export APT_KEY_DONT_WARN_ON_DANGEROUS_USAGE=1

echo "I am running on $BUILDPLATFORM, building for $TARGETPLATFORM" && \
    echo "working directory: $(pwd)" && ls -la && \
    echo "npm version: $(npm version)" && \
    npm i -C ./angular/works && echo "finished angular install" &&
    npm i -C ./nest/works && echo "finished nest install" && \
    npm i -C ./nx/works && echo "finished nx install"