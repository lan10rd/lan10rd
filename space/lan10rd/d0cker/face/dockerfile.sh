#!/bin/bash
export APT_KEY_DONT_WARN_ON_DANGEROUS_USAGE=1

echo "I am running on $BUILDPLATFORM, building for $TARGETPLATFORM"

#base packages
apt-get update 
apt-get install -y apt-transport-https ca-certificates  gnupg-agent software-properties-common
apt-get update

apt-get install -y curl git wget rsync openssl openssh-client openssh-server mergerfs sshfs zip unzip python3-pip dnsutils dialog apt-utils nano docker.io
apt-get update 

wget -qO- https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > packages.microsoft.gpg
sudo install -o root -g root -m 644 packages.microsoft.gpg /etc/apt/trusted.gpg.d/
sh -c 'echo "deb [arch=amd64,arm64,armhf signed-by=/etc/apt/trusted.gpg.d/packages.microsoft.gpg] https://packages.microsoft.com/repos/code stable main" > /etc/apt/sources.list.d/vscode.list'
rm -f packages.microsoft.gpg
apt-get update
apt-get install -y code
code --install-extension lanl0rd.celeste --user-data-dir /root/.vscode

# docker compose
pip3 install docker-compose

# nginx
pip3 install crossplane

# node
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
nvm install node
nvm install --lts
nvm use --lts
npm i -g npm
npm i -g yarn --force
npm i -g typescript
npm i -g rimraf
npm i -g @nestjs/cli
npm i -g @angular/cli
npm i -g nx
npm i -g http-server
npm i -g create-react-app
npm i -g express-generator
npm i -g svelte-cli

#java
apt-get install -y openjdk-14-jdk
curl -s "https://get.sdkman.io" | bash
bash -c "source $HOME/.sdkman/bin/sdkman-init.sh
yes | sdk install gradle 6.8.2
yes | sdk install springboot
rm -rf $HOME/.sdkman/archives/*
rm -rf $HOME/.sdkman/tmp/*"

#go
rm -rf /usr/local/go && tar -C /usr/local -xzf go1.14.3.linux-amd64.tar.gz
export PATH=$PATH:/usr/local/go/bin
go get -u github.com/gin-gonic/gin
go get github.com/beego/beego/v2@v2.0.0
go get github.com/revel/revel 
go get -u github.com/valyala/fasthttp
go get goji.io
go get github.com/go-martini/martini
go get github.com/gorilla/mux
go get github.com/labstack/echo/v4
go get github.com/urfave/negroni
go get github.com/go-kit/kit && go get github.com/kujtimiihoxha/kit
wget https://github.com/gobuffalo/buffalo/releases/download/v0.16.21/buffalo_0.16.21_Linux_x86_64.tar.gz && tar -xvzf buffalo_0.16.21_Linux_x86_64.tar.gz && mv buffalo /usr/local/bin/buffalo

#python
pip3 install virtualenv
pip3 install requests
pip3 install cherrypy
pip3 install sanic
pip3 install flask
pip3 install django
pip3 install aiohttp[speedups]
pip3 install tornado
pip3 install dash
pip3 install falcon
pip3 install bottle
pip3 install hug -U

#nginx
# apt-get install -y nginx

#apache
# apt update
# apt-get install -y apache2 

#php
# curl -s https://packagecloud.io/install/repositories/phalcon/nightly/script.deb.sh | bash
# apt-get install -y php libapache2-mod-php
# apt-get update
# apt-get -y install php7.0-phalcon

#perl
apt-get install -y perl
# curl -L http://cpanmin.us | perl - --sudo Dancer2

#ruby
apt-get install -y ruby-full
# gem install rails