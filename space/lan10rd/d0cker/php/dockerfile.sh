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
    curl -s https://packagecloud.io/install/repositories/phalcon/nightly/script.deb.sh | bash && \
    apt-get update && \
    apt-get -y install php7.0-phalcon