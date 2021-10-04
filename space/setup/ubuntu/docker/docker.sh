echo "DOCKER"
echo "..."

# remove previous installations
echo "removing previous"
sudo apt-get remove docker docker-engine docker.io containerd runc

echo "setting repo"
# set up the repository
sudo apt-get update
sudo apt-get install apt-transport-https ca-certificates curl gnupg lsb-release

echo "official GPG key"
# add docker official GPG key
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

echo "setting version"
# set to stable version
ARCH=$(uname -m)
echo "arch is $ARCH"
COMMAND="echo \"deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable\" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null"
if [[ $ARCH == *aarch64* ]]; then COMMAND=" echo \"deb [arch=arm64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable\" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null"; fi ;

echo $COMMAND
eval "$COMMAND"

echo "install"
# install
sudo apt-get update
sudo apt-get install -y docker-ce docker-ce-cli containerd.io

echo "adding user to group"
sudo groupadd docker
sudo usermod -aG docker $USER

echo "setting up daemon json"
sudo sh -c 'echo {\"log-driver\": \"local\", \"log-opts\": {\"max-size\": \"10m\", \"max-file\": \"3\"}, \"hosts\": [\"tcp://0.0.0.0:2375\", \"unix:///var/run/docker.sock\", \"fd://\"], \"experimental\": true} > /etc/docker/daemon.json'
sudo sh -c "sed -i 's/-H fd:\/\// /g' /lib/systemd/system/docker.service"
sudo systemctl daemon-reload
sudo systemctl restart docker.service
