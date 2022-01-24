#!/bin/sh
nx build common-wc-ng --prod --output-hashing=none
# where is scripts.js before main.js coming from ~/lan10rd/grams/dist/apps/common-wc-ng/scripts.js
cat ~/lan10rd/grams/dist/apps/common-wc-ng/runtime.js ~/lan10rd/grams/dist/apps/common-wc-ng/polyfills.js  ~/lan10rd/grams/dist/apps/common-wc-ng/main.js > ~/lan10rd/grams/dist/apps/common-wc-ng/common-wc-ng.js