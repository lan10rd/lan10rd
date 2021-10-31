# Works

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


------- HERE BE DRAGONS --------
commands run:
ng new works
y (optimize by keeping stricter bundle sizes)
y (use angular router)
scss

ng add @nguniversal/express-engine
ng add @angular/localize
ng add @angular/pwa --project works
ng add @angular/material
y (Indigo/pink)
y (typography styles globally)
y (setup browser animations)
npm i --save --no-optional socket.io-client
npm i --save --no-optional joi
npm i --save --no-optional dotenv
npm i --save --no-optional moment
npm i --save --no-optional remarkable
npm i --save --no-optional lodash
npm i --save-dev --no-optional @types/lodash
npm install --save-dev https-proxy-agent
npm i three
npm i postprocessing
npm i uuid

files:
tsconfig.json ("resolveJsonModule": true, "allowSyntheticDefaultImports": true)


--- soon to come ---
ng add @ngrx/store@latest
ng add @ngrx/store-devtools@latest
ng add @ngrx/effects@latest
ng add @ngrx/router-store@latest
ng add @ngrx/entity@latest
ng add @ngrx/schematics@latest
ng add @ngrx/component-store@latest
ng add @ngrx/data@latest
ng add @ngrx/component@latest
ng add @scullyio/init

uuid


--- consider ---
adding this to scripts to allow parallel ng instances using same node modules
    "postinstall": "ngcc --properties es2015 browser module main --first-only --create-ivy-entry-points"
