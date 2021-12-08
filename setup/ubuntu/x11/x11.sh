echo "X11"
echo "..."

echo "editing /etc/gdm3/custom.conf to enable x server as default instead of Wayland"
sudo sh -c "sed -i 's/#WaylandEnable=false/WaylandEnable=false/g' /etc/gdm3/custom.conf"
sudo systemctl restart gdm3

echo "adding x11 as startup program, in ~/.config/autostartup"
#x11vnc -forever -loop -noxdamage -repeat -shared
cp ./x11vnc.desktop ~/.config/autostart

# [Desktop Entry]
# Type=Application
# Exec=x11vnc -loop -forever -noxdamage -shared -repeat
# Hidden=false
# NoDisplay=false
# X-GNOME-Autostart-enabled=true
# Name[en_US]=x11vnc
# Name=x11vnc
# Comment[en_US]=
# Comment=
