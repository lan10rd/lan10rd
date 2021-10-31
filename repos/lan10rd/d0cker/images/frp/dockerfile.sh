export APT_KEY_DONT_WARN_ON_DANGEROUS_USAGE=1

frp_download="https://github.com/fatedier/frp/releases/download/v0.36.2/frp_0.36.2_linux_amd64.tar.gz"
frp="frp_0.36.2_linux_amd64"

if [[ "$TARGETPLATFORM" == *"arm"* ]] ; then frp_download="https://github.com/fatedier/frp/releases/download/v0.36.2/frp_0.36.2_linux_arm64.tar.gz"; frp="frp_0.36.2_linux_arm64"; fi ;

cd /tmp/docker
pwd
ls -la
apt update
apt-get install -y wget
apt update
echo "I am running on $BUILDPLATFORM, building for $TARGETPLATFORM"
wget $frp_download
tar -xf ${frp}.tar.gz
pwd
ls -la
mv ${frp} /etc/frp
