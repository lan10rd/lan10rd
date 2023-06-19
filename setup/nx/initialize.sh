# ensure we know where we setup
cd ~/lan10rd/setup/nx 

# create nx monorepo latest version, named grams
npx -y create-nx-workspace@latest --pm=yarn --name=grams --style=scss --nx-cloud=n --preset=empty

sh imports.sh