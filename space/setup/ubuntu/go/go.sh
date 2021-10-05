bash < <(curl -s -S -L https://raw.githubusercontent.com/moovweb/gvm/master/binscripts/gvm-installer) # or replace bash with zsh
source /home/clone/.gvm/scripts/gvm
gvm install go1.4 # gvm install go1.4 -B # --prefer-binary
gvm use go1.4
export GOROOT_BOOTSTRAP=$GOROOT
gvm install go1.5

gvm list
gvm listall

# to uninstall (and all versions of go)
# gvm implode
