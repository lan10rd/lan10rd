curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash

# source ~/.profile
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # this loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion" # this loads nvm bash_completion

nvm install node 
nvm install 14.18.0
nvm use 14.18.0