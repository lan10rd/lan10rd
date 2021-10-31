# Lanl0rd

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.3.

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).




// dependencies and cli commands used
ng generate lanl0rd --routing (scss)
ng generate module notes --route notes --module app.module --style=scss
ng add @angular/pwa --project lanl0rd
<!-- ng generate app-shell lanl0rd -->
ng add @angular/localize

npm i http-server



<!-- rearranged to libs, added angular child to notes -->
<!-- dynamically set favicon -->
<link id="appFavicon" rel="icon" type="image/x-icon" href="favicon.ico">
import { DOCUMENT } from '@angular/common';
constructor(@Inject(DOCUMENT) private _document: HTMLDocument) {}
this._document.getElementById('appFavicon').setAttribute('href', '/your/icon/path.ico')

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
