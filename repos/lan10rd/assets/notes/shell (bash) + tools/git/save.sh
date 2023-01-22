# /bin/bash -e

read -p 'Message: ' messagevar

echo git add -A
git add -A

echo git commit -m \"messagevar\" -n
git commit -m "$messagevar" -n

echo git push --no-verify
git push --no-verify