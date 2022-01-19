cd ~/lan10rd/grams
nx build docs-app-ng
npx scully --removeStaticDist --project docs-app-ng --stats --no-prompt
cd ~
git clone https://github.com/lan10rd/lan10rd.github.io
rm -rf lan10rd.github.io/*
rsync -avhri --delete --progress ~/lan10rd/grams/dist/static/* ~/lan10rd.github.io
cd ./lan10rd/repos/lan10rd/assets
python3 index.py
cd ~/lan10rd.github.io
git add .
git commit -m "publish"
git push
cd ~
rm -rf lan10rd.github.io
cd ~/lan10rd
git add .
git commit -m "publishing github" -n
git push