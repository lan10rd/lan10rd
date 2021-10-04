echo "FUSE"
echo "..."

sudo nano /etc/fuse.conf
echo "uncommenting user user_allow_other"
sudo sh -c "sed -i 's/#user_allow_other/user_allow_other/g' /etc/fuse.conf"