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

# docker pull lanl0rd/js
# docker pull lanl0rd/certbot
# docker pull lanl0rd/acme
# docker pull lanl0rd/nginx
# docker pull lanl0rd/traefik
# docker pull lanl0rd/mongo
# docker pull lanl0rd/mongo-express
# docker pull lanl0rd/frpc
# docker pull lanl0rd/frps
# docker pull lanl0rd/buildx

# if offline
# loop through each image.tar.gz in arm/amd and load