#!/bin/bash
export APT_KEY_DONT_WARN_ON_DANGEROUS_USAGE=1

# command="add-apt-repository \"deb [arch=amd64] https://download.docker.com/linux/debian $(lsb_release -cs) stable\""
# if [[ "$TARGETPLATFORM" == *"'arm'"* ]] ; then command="add-apt-repository \"deb [arch=arm64] https://download.docker.com/linux/debian $(lsb_release -cs) stable\""; fi;
command="add-apt-repository \"deb [arch=amd64] https://download.docker.com/linux/debian buster stable\""
if [[ "$TARGETPLATFORM" == *"arm"* ]] ; then command="add-apt-repository \"deb [arch=arm64] https://download.docker.com/linux/debian buster stable\""; apt-get update ; fi ;

echo "I am running on $BUILDPLATFORM, building for $TARGETPLATFORM" && \
apt-get update && \
    apt-get install -y curl git wget rsync openssl openssh-client openssh-server mergerfs sshfs zip unzip python3-pip dnsutils dialog apt-utils apt-transport-https ca-certificates  gnupg-agent software-properties-common nano && \
    apt-get update && \
    eval "curl -fsSL https://download.docker.com/linux/debian/gpg | apt-key add -" && \
    eval "$command" && \
    apt-get update && \
    apt-get install -y docker-ce docker-ce-cli containerd.io && \
    pip3 install docker-compose && \
    pip3 install crossplane && \
    pip3 install virtualenv && \
    pip3 install requests && \
    pip3 install cherrypy && \
    pip3 install sanic && \
    pip3 install flask && \
    pip3 install django && \
    pip3 install aiohttp[speedups] && \
    pip3 install tornado && \
    pip3 install dash && \
    pip3 install falcon && \
    pip3 install bottle && \
    pip3 install hug -U