echo "compiling js to ts."
../../../node_modules/typescript/bin/tsc generate-lib.ts --experimentalDecorators
node generate-lib.js $1
rm generate-lib.js
echo "done!"