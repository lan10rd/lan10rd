echo "compiling js to ts."
../../../node_modules/typescript/bin/tsc remove-lib.ts --experimentalDecorators
node remove-lib.js $1
rm remove-lib.js
echo "done!"