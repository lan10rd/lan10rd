#!/bin/bash
export APT_KEY_DONT_WARN_ON_DANGEROUS_USAGE=1

echo "I am running on $BUILDPLATFORM, building for $TARGETPLATFORM"
apt update
DEBIAN_FRONTEND=noninteractive apt-get install -y apt-utils apt-transport-https ca-certificates gnupg-agent software-properties-common

apt update
DEBIAN_FRONTEND=noninteractive apt-get install -y curl git wget rsync openssl openssh-client openssh-server mergerfs sshfs zip unzip python3-pip dnsutils dialog nano docker.io sudo tmux zsh ksh gcc g++ make bash-completion build-essential file locales htop dstat vim chromium-browser
apt update

useradd -ms /bin/bash super
usermod -aG docker super
echo 'super ALL=(ALL) NOPASSWD: ALL' >> /etc/sudoers

#python
apt --purge autoremove python3-pip
DEBIAN_FRONTEND=noninteractive apt install -y python3-pip
pip3 -v
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
# nginx and docker helpers
pip3 install docker-compose
pip3 install crossplane

#java
DEBIAN_FRONTEND=noninteractive apt install -y openjdk-14-jdk
curl -s "https://get.sdkman.io" | bash
bash -c "source $HOME/.sdkman/bin/sdkman-init.sh
yes | sdk install gradle 6.8.2
yes | sdk install springboot
rm -rf $HOME/.sdkman/archives/*
rm -rf $HOME/.sdkman/tmp/*"

#perl
DEBIAN_FRONTEND=noninteractive apt install -y perl
# curl -L http://cpanmin.us | perl - --sudo Dancer2

#ruby
DEBIAN_FRONTEND=noninteractive apt install -y ruby-full
# gem install rails

# nvm & node
# curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
# cp -r /root/.nvm /home/super/.nvm
# chown super:super -R "/home/super/.nvm"
# echo 'export NVM_DIR="/home/super/.nvm"'                                       >> "/home/super/.bashrc"
# echo '[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"  # This loads nvm' >> "/home/super/.bashrc"
# echo '[ -s "$NVM_DIR/bash_completion" ] && . "$NVM_DIR/bash_completion" # This loads nvm bash_completion' >> "/home/super/.bashrc"
# source /home/super/.nvm/nvm.sh
# nvm install node 
# nvm use node
# nvm install v14.17.0
curl -fsSL https://deb.nodesource.com/setup_14.x | bash -
DEBIAN_FRONTEND=noninteractive apt install -y nodejs
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
npm i -g puppeteer

#go
godist="go1.16.5.linux-amd64"
if [[ "$TARGETPLATFORM" == *"arm"* ]] ; then godist="go1.16.5.linux-arm64"; fi ;

wget "https://golang.org/dl/$godist.tar.gz"
tar -C /usr/local -xzf "$godist.tar.gz"
# mv go /usr/local/go/bin
export PATH=$PATH:/usr/local/go/bin
rm "$godist.tar.gz"
. $HOME/.profile
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
# wget https://github.com/gobuffalo/buffalo/releases/download/v0.16.21/buffalo_0.16.21_Linux_x86_64.tar.gz && tar -xvzf buffalo_0.16.21_Linux_x86_64.tar.gz && mv buffalo /usr/local/bin/buffalo

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
