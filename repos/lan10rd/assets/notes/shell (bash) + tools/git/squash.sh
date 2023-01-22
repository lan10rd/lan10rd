#! /bin/bash -e

branchvar=$(git branch --show-current)
echo $branchvar

read -p 'Message: ' messagevar

echo git origin develop -X ours
git origin develop -X ours

echo git checkout develop
git checkout develop

echo git pull
git pull

echo git checkout -b squashy
git checkout -b squashy

echo git merge $branchvar --squash
git merge $branchvar --squash

echo git commit -m \"$messagevar\" -n
git commit -m "$messagevar" -n

echo git checkout $branchvar
git checkout $branchvar

echo  git reset --hard squashy
git reset --hard squashy

echo git push -f --no-verify
git push -f --no-verify

echo git branch -D squashy
git branch -D squashy

echo done!