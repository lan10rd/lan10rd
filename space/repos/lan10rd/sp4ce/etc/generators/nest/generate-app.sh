echo "compiling js to ts."
../../../node_modules/typescript/bin/tsc generate-app.ts --experimentalDecorators
node generate-app.js $1
rm generate-app.js
echo "done!"