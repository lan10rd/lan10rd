echo "compiling js to ts."
../../../node_modules/typescript/bin/tsc remove-app.ts --experimentalDecorators
node remove-app.js $1
rm remove-app.js
echo "done!"