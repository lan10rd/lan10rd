echo "SSH"
echo "..."

/ cd $HOME/.ssh or lanl0rd/ssh
ssh-keygen -f test -C "" -t rsa -q -N "" -b 2048
cat test.pub >> ~/.ssh/authorized_keys

# Enabling the root account:
sudo -i
#To enable the Root account (i.e. set a password) use:
sudo passwd root

sudo mkdir -P /root/.ssh
sudo touch /root/.ssh/authorized_keys
sudo chmod -R 777 /root/.ssh
sudo cat test.pub >> root/.ssh/authorized_keys

sudo nano /etc/ssh/sshd_config

PermitRootLogin yes
PubkeyAuthentication yes
ChallengeResponseAuthentication no # erm not entirely sure what this does
PasswordAuthentication yes # for security change to no
UsePAM yes # default

sudo service sshd restart
sudo service ssh restart

sudo systemctl restart sshd

// now test you can jump into server as root
ssh root@localhost -o PreferredAuthentications=publickey -o "StrictHostKeyChecking no" -i $HOME/.ssh/test