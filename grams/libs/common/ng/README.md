# common-ng

This library was generated with [Nx](https://nx.dev).

## Running unit tests

Run `nx test common-ng` to execute the unit tests.


nx build common-ng --prod && cd dist/libs/common/ng && npm publish --scope=@lanl0rdjs --access public
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
npm publish --scope=@lanl0rdjs --access public
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


added "allowSyntheticDefaultImports": true to tsconfig.json because of ansi-to-html dependency,
 wouldn't let me do import * as Converter from 'ansi-to-html' or import Converter from 'ansi-to-html' and the library wanted be to do require('ansi-to-html')

todo, go back and implement ansi-to-html natively so that we dont need the synthetic default imports which give a optimization bailout warning