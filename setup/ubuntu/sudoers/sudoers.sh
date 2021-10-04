echo "SUDOERS"
echo "..."

echo "adding ability for sudo user to skip password entry in /etc/sudoers"

# sudo sh -c "sed -i 's/sudo   ALL=(ALL:ALL) ALL/sudo   ALL=(ALL:ALL) ALL\n%sudo ALL=NOPASSWD: ALL/g' /etc/fuse.conf"