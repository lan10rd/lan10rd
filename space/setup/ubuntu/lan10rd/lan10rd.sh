echo "LAN10rd"
echo "..."

mkdir ~/lanl0rd
mkdir ~/lanl0rd/ssh
mkdir ~/lanl0rd/space
mkdir ~/lanl0rd/mounts
mkdir ~/lanl0rd/mounts/fuse
mkdir ~/lanl0rd/mounts/fuse/media
mkdir ~/lanl0rd/mounts/fuse/zpools
mkdir ~/lanl0rd/mounts/local
mkdir ~/lanl0rd/mounts/local/media
mkdir ~/lanl0rd/mounts/local/zpools
mkdir ~/lanl0rd/mounts/remote
mkdir ~/lanl0rd/mounts/remote/media
mkdir ~/lanl0rd/mounts/remote/zpools

# if online

docker pull lan10rd/js
docker pull lan10rd/py
docker pull lan10rd/certbot
docker pull lan10rd/acme
docker pull lan10rd/nginx
docker pull lan10rd/traefik
docker pull lan10rd/mongo
docker pull lan10rd/mongo-express
docker pull lan10rd/frpc
docker pull lan10rd/frps
docker pull lan10rd/buildx
docker pull lan10rd/openresty
docker pull lan10rd/verdaccio
docker pull lan10rd/super
docker pull lan10rd/java
docker pull lan10rd/go
docker pull lan10rd/multiarch
docker pull lan10rd/face
docker pull lan10rd/ruby

docker pull lan10rd/haproxy

# if offline
# loop through each image.tar.gz in arm/amd and load