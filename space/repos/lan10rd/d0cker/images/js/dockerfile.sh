#!/bin/bash
export APT_KEY_DONT_WARN_ON_DANGEROUS_USAGE=1

# command="add-apt-repository \"deb [arch=amd64] https://download.docker.com/linux/debian $(lsb_release -cs) stable\""
# if [[ "$TARGETPLATFORM" == *"'arm'"* ]] ; then command="add-apt-repository \"deb [arch=arm64] https://download.docker.com/linux/debian $(lsb_release -cs) stable\""; fi;
command="add-apt-repository \"deb [arch=amd64] https://download.docker.com/linux/debian buster stable\""
if [[ "$TARGETPLATFORM" == *"arm"* ]] ; then command="add-apt-repository \"deb [arch=arm64] https://download.docker.com/linux/debian buster stable\""; apt-get update ; fi ;

# can replace the above with apt-get -y docker.io ??

echo "I am running on $BUILDPLATFORM, building for $TARGETPLATFORM" 
apt-get update 
apt-get install -y curl git wget rsync openssl openssh-client openssh-server mergerfs sshfs zip unzip python3-pip dnsutils dialog apt-utils apt-transport-https ca-certificates  gnupg-agent software-properties-common nano sudo
apt-get update 
eval "curl -fsSL https://download.docker.com/linux/debian/gpg | apt-key add -" 
eval "$command" 
apt-get update 
apt-get install -y docker-ce docker-ce-cli containerd.io  

pip3 install docker-compose 
pip3 install crossplane 

echo 'node ALL=(ALL) NOPASSWD: ALL' >> /etc/sudoers
usermod -aG docker node

#chown root:docker /var/run/docker.sock
#You may also try changing the group ownership of the ~/.docker directory.
#sudo chown "$USER":"$USER" /home/"$USER"/.docker -R
#sudo chmod g+rwx "$HOME/.docker" -R

# npm
npm i -g \
    yarn \
    npx \
    np \
    npm-name-cli \
    npm-check

# linting
npm install -g \
    eslint \
    babel-eslint \
    eslint-config-standard \
    eslint-config-standard-react \
    eslint-config-standard-jsx \
    eslint-plugin-react \
    eslint-config-prettier \
    eslint-plugin-prettier \
    prettier \
    standard \
    typescript

# debugging
npm install -g \
    ndb \
    node-inspector

# general utilities
npm install -g \
    tldr \
    now \
    spoof \
    fkill-cli \
    castnow \
    github-is-starred-cli \
    rimraf \
    vtop

# frameworks
npm install -g \
    nx \
    @nestjs/cli \
    @angular/cli \
    create-react-app \
    create-react-library \
    react-native-cli \
    express-generator \
    svelte-cli \
    vue-native-cli \
    @vue/cli

# dev
npm i -g \
    puppeteer \
    tinypng-cli \
    nodemon \
    sort-package-json \
    http-server

# rarely used nowadays, but still useful to have
npm install -g \
    gulp \
    less


# Check for outdated, incorrect and unused dependencies. The -u arg gives you an interactive tool. If you're using yarn this feature is built in - yarn upgrade-interactive --latest
# npm-check -u
# npm-check -ug

# nodemon app.js

# sort-package-json

# List globally installed packages
npm ls -g --depth=0