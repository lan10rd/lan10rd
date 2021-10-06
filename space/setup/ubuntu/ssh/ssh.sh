echo "SSH"
echo "..."

cd ../../../ssh

ssh-keygen -f auto -C "" -t rsa -q -N "" -b 2048
cat auto.pub >> ~/.ssh/authorized_keys

sudo nano /etc/ssh/sshd_config

PermitRootLogin yes
PubkeyAuthentication yes
ChallengeResponseAuthentication no # erm not entirely sure what this does
PasswordAuthentication yes # for security change to no
UsePAM yes # default

sudo sh -c "sed -i 's/#user_allow_other/user_allow_other/g' /etc/fuse.conf"

sudo service sshd restart
sudo service ssh restart

sudo systemctl restart sshd

// now test you can jump into server as root
ssh root@localhost -o PreferredAuthentications=publickey -o "StrictHostKeyChecking no" -i $HOME/.ssh/test


# Enabling the root account:
sudo -i
# To enable the Root account (i.e. set a password) use:
sudo passwd root

sudo mkdir -P /root/.ssh
sudo touch /root/.ssh/authorized_keys
sudo chmod -R 777 /root/.ssh
sudo cat test.pub >> root/.ssh/authorized_keys
