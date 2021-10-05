# wget -qO- https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > packages.microsoft.gpg
# sudo install -o root -g root -m 644 packages.microsoft.gpg /etc/apt/trusted.gpg.d/
# sh -c 'echo "deb [arch=amd64,arm64,armhf signed-by=/etc/apt/trusted.gpg.d/packages.microsoft.gpg] https://packages.microsoft.com/repos/code stable main" > /etc/apt/sources.list.d/vscode.list'
# rm -f packages.microsoft.gpg
# apt update
# apt install -y code
#code --install-extension lanl0rd.celeste --user-data-dir /root/.vscode

echo "installing vs code"
#sudo dpkg -i ./code_1.59.1-1629374148_arm64

echo "making folders for custom gui"
mkdir $HOME/.icons
mkdir $HOME/.themes

echo "changing dock"
gsettings set org.gnome.shell.extensions.dash-to-dock transparency-mode 'FIXED'
gsettings set org.gnome.shell.extensions.dash-to-dock background-opacity 0.2
