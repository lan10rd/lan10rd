echo "\n"
echo "genv (go)!"
sudo apt install -y \
    mercurial \
    binutils \
    bison

source $HOME/.gvm/scripts/gvm
bash < <(curl -s -S -L https://raw.githubusercontent.com/moovweb/gvm/master/binscripts/gvm-installer) # or replace bash with zsh

gvm install go1.4 # gvm install go1.4 -B # --prefer-binary
gvm use go1.4
export GOROOT_BOOTSTRAP=$GOROOT
gvm install go1.5

gvm list
gvm listall

# to uninstall (and all versions of go)
# gvm implode
