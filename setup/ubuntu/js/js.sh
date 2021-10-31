curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash

# source ~/.profile
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # this loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion" # this loads nvm bash_completion

nvm install node 
nvm install 14.18.0
nvm use 14.18.0

# npm
npm i -g \
    yarn \
    npx \
    np \
    npm-name-cli \
    npm-check

# frameworks
npm install -g \
    nx \
    @nestjs/cli \
    create-react-app \
    create-react-library \
    react-native-cli \
    express-generator \
    svelte-cli \
    vue-native-cli \
    @vue/cli
echo n | npm i -g --silent @angular/cli

# linting
npm install -g \
    eslint \
    babel-eslint \
    eslint-config-standard \
    eslint-config-standard-react \
    eslint-config-standard-jsx \
    eslint-plugin-react \
    eslint-config-prettier \
    eslint-plugin-prettier \
    prettier \
    standard \
    typescript

# debugging
npm install -g \
    ndb \
    node-inspector

# general utilities
npm install -g \
    tldr \
    now \
    spoof \
    fkill-cli \
    castnow \
    github-is-starred-cli \
    rimraf \
    vtop

# dev
npm i -g \
    puppeteer \
    tinypng-cli \
    nodemon \
    sort-package-json \
    http-server

# rarely used nowadays, but still useful to have
npm install -g \
    gulp \
    less


# Check for outdated, incorrect and unused dependencies. The -u arg gives you an interactive tool. If you're using yarn this feature is built in - yarn upgrade-interactive --latest
# npm-check -u
# npm-check -ug

# nodemon app.js

# sort-package-json

# List globally installed packages
npm ls -g --depth=0