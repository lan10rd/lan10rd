cd ../lan10rd/grams
nx build docs-app-ng
rsync -avhri --delete --progress dist/apps/docs-app-ng/* ../../lan10rd.github.io
cd ../../lan10rd.github.io
git add .
git commit -m "publish"
git push
cp ../lan10rd/grams/etc/github/publish.sh .