echo "SSH"
echo "..."

mkdir -p ../../../ssh
cd ../../../ssh

ssh-keygen -f lan10rd -C "" -t rsa -q -N "" -b 2048
cat lan10rd.pub >> ~/.ssh/authorized_keys

# The .ssh directory permissions should be 700 (drwx------).  The public key (.pub file) should be 644 (-rw-r--r--). The private key (id_rsa) on the client host, and the authorized_keys file on the server, should be 600 (-rw-------).

sudo sh -c "echo '' > /etc/ssh/sshd_config.d/lan10rd.conf"
sudo sh -c "cat <<EOF > /etc/ssh/sshd_config.d/lan10rd.conf
ChallengeResponseAuthentication no
PasswordAuthentication yes
PermitRootLogin yes
EOF"


# PermitRootLogin yes
# PubkeyAuthentication yes
# ChallengeResponseAuthentication no # erm not entirely sure what this does
# PasswordAuthentication yes # for security change to no
# UsePAM yes # default

sudo service sshd restart
sudo service ssh restart
sudo systemctl restart sshd


# from another box thats setup already should be able to get the ssh key, just need the other ip address, either need to find it ahead of time or, somehow run lan10rd first and then get an ip address


# now test you can jump into server as root
# ssh root@localhost -o PreferredAuthentications=publickey -o "StrictHostKeyChecking no" -i $HOME/.ssh/test


# # Enabling the root account:
# sudo -i
# # To enable the Root account (i.e. set a password) use:
# sudo passwd root

# sudo mkdir -P /root/.ssh
# sudo touch /root/.ssh/authorized_keys
# sudo chmod -R 777 /root/.ssh
# sudo cat test.pub >> root/.ssh/authorized_keys
