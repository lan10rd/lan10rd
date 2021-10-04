echo "PULSE"
echo "..."

echo "enabling audio over tcp in /etc/pulse/default/pa"
# load-module module-native-protocol-tcp auth-anonymous=1
sudo sh -c "sed -i '1s/^/load-module module-native-protocol-tcp auth-anonymous=1\n/' /etc/pulse/default.pa"