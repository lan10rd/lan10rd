echo "SETTING UP!!"

sudo sh ./sudoers/sudoers.sh
sudo sh ./apt/apt.sh
sudo sh ./pulse/pulse.sh
sudo sh ./x11/x11.sh
sudo sh ./fuse/fuse.sh
sudo sh ./ssh/ssh.sh
sudo sh ./rpi/rpi.sh
sudo sh ./docker/docker.sh
sudo sh ./downloads/downloads.sh
sudo sh ./lan10rd/lan10rd.sh

sudo reboot