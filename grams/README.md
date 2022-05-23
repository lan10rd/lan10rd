

# Grams

This project was generated using [Nx](https://nx.dev).

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

🔎 **Smart, Fast and Extensible Build System**

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are our core plugins:

- [React](https://reactjs.org)
  - `npm install --save-dev @nrwl/react`
- Web (no framework frontends)
  - `npm install --save-dev @nrwl/web`
- [Angular](https://angular.io)
  - `npm install --save-dev @nrwl/angular`
- [Nest](https://nestjs.com)
  - `npm install --save-dev @nrwl/nest`
- [Express](https://expressjs.com)
  - `npm install --save-dev @nrwl/express`
- [Node](https://nodejs.org)
  - `npm install --save-dev @nrwl/node`

There are also many [community plugins](https://nx.dev/community) you could add.

## Generate an application

Run `nx g @nrwl/react:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `nx g @nrwl/react:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@grams/mylib`.

## Development server

Run `nx serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `nx g @nrwl/react:component my-component --project=my-app` to generate a new component.

## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.



## ☁ Nx Cloud

### Distributed Computation Caching & Distributed Task Execution

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-cloud-card.png"></p>

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that are new to Nx can connect to Nx Cloud and start saving time instantly.

Teams using Nx gain the advantage of building full-stack applications with their preferred framework alongside Nx’s advanced code generation and project dependency graph, plus a unified experience for both frontend and backend developers.

Visit [Nx Cloud](https://nx.app/) to learn more.

## serve example
nx serve docs-app-ng --host 0.0.0.0 --disableHostCheck

## nx list

>  NX  Installed plugins:

  @nrwl/angular (builders,generators)
  @nrwl/cypress (builders,generators)
  @nrwl/express (generators)
  @nrwl/jest (builders,generators)
  @nrwl/linter (builders,generators)
  @nrwl/nest (generators)
  @nrwl/next (builders,generators)
  @nrwl/node (builders,generators)
  @nrwl/nx-plugin (builders,generators)
  @nrwl/react (generators)
  @nrwl/storybook (builders,generators)
  @nrwl/web (builders,generators)
  @nrwl/workspace (builders,generators)


>  NX  Community plugins:

  nx-plugins - Nx plugin integrations with ESBuild / Vite / Snowpack / Prisma, with derived ESBuild / Snowpack / ... plugins.
  @codebrew/nx-aws-cdk - An Nx plugin for aws cdk develop.
  @rxap/plugin-localazy - An Nx plugin for localazy.com upload and download tasks.
  nx-electron - An Nx plugin for developing Electron applications
  nx-stylelint - Nx plugin to use stylelint in a nx workspace
  @nxtend/ionic-react - An Nx plugin for developing Ionic React applications and libraries
  @nxtend/ionic-angular - An Nx plugin for developing Ionic Angular applications and libraries
  @nxtend/capacitor - An Nx plugin for developing cross-platform applications using Capacitor
  @nxtend/firebase - An Nx plugin for developing applications using Firebase
  @angular-architects/ddd - Nx plugin for structuring a monorepo with domains and layers
  @offeringsolutions/nx-karma-to-jest - Nx plugin for replacing karma with jest in an Nx workspace
  @flowaccount/nx-serverless - Nx plugin for node/angular-universal schematics and deployment builders in an Nx workspace
  @ns3/nx-serverless - Nx plugin for node serverless applications in an Nx workspace
  @ns3/nx-jest-playwright - Nx plugin to run jest-playwright e2e tests in an Nx workspace
  @dev-thought/nx-deploy-it - Nx plugin to deploy applications on your favorite cloud provider
  @offeringsolutions/nx-protractor-to-cypress - Nx plugin to replace protractor with cypress in an nx workspace
  @nx-tools/nx-docker - Nx plugin to build docker images of your affected apps
  @angular-custom-builders/lite-serve - Nx plugin to run the e2e test on an existing dist folder
  @nx-plus/nuxt - Nx plugin adding first class support for Nuxt in your Nx workspace.
  @nx-plus/vue - Nx plugin adding first class support for Vue in your Nx workspace.
  @nx-plus/docusaurus - Nx plugin adding first class support for Docusaurus in your Nx workspace.
  @twittwer/compodoc - Nx Plugin to integrate the generation of documentation with Compodoc in the Nx workflow
  @nxext/svelte - Nx plugin to use Svelte within nx workspaces
  @nxext/stencil - Nx plugin to use StencilJs within nx workspaces
  @nxext/vite - Nx plugin to use ViteJS within nx workspaces
  @nxext/solid - Nx plugin to use SolidJS within nx workspaces
  @joelcode/gcp-function - Nx plugin to generate, test, lint, build, serve, & deploy Google Cloud Function
  @nx-go/nx-go - Nx plugin to use Go in a Nx workspace
  @angular-architects/module-federation - Nx plugin to use webpack module federation
  @nxrocks/nx-spring-boot - Nx plugin to generate, run, package, build (and more) Spring Boot projects inside your Nx workspace
  @trumbitta/nx-plugin-openapi - OpenAPI Plugin for Nx. Keep your API spec files in libs, and auto-generate sources.
  @trumbitta/nx-plugin-unused-deps - Check the dependency graph of your monorepo, looking for unused NPM packages.
  @nxrocks/nx-flutter - Nx Plugin adding first class support for Flutter in your Nx workspace
  @srleecode/domain - Nx Plugin for allowing operations to occur at the domain level instead of the default library level
  @jscutlery/semver - Nx plugin to automate semantic versioning and CHANGELOG generation.
  ngx-deploy-npm - Publish your libraries to NPM with just one command.
  @trafilea/nx-shopify - Nx plugin for developing performance-first Shopify themes
  nx-dotnet - Nx plugin for developing and housing .NET projects within an Nx workspace.
  @nxrocks/nx-quarkus - Nx plugin to generate, run, package, build (and more) Quarkus projects inside your Nx workspace
  @nx-extend/gcp-secrets - Nx plugin to generate and securely deploy your Google Cloud Secrets
  @nx-extend/gcp-storage - Nx plugin to upload to Google Cloud Storage
  @nx-extend/gcp-functions - Nx plugin to generate, run, build and deploy your Google Cloud Functions
  @nx-extend/gcp-deployment-manager - Nx plugin to deploy your Google Cloud Deployments
  @nx-extend/gcp-cloud-run - Nx plugin to build and deploy your docker container to Google Cloud Run
  @nx-extend/translations - Nx plugin to extract, pull, push and translate your apps translations
  @nativescript/nx - Nx Plugin adding first class support for NativeScript in your Nx workspace
  @nx-clean/plugin-core - Nx Plugin to generate projects following Clean Architecture practices
  @jnxplus/nx-boot-gradle - Nx plugin to add Spring Boot and Gradle multi-project builds support to Nx workspace
  @jnxplus/nx-boot-maven - Nx plugin to add Spring Boot and Maven multi-module project support to Nx workspace
  @nxtensions/astro - Nx plugin adding first class support for Astro (https://astro.build).


## all dependency commands run in this project

### setup and install
npx create-nx-workspace@latest --preset=empty // name of workspace, grams
cd grams
rm package-lock.json

### core nx nrwl support
yarn add -D \
  @nrwl/angular \
  @nrwl/cypress \
  @nrwl/express \
  @nrwl/nest \
  @nrwl/next \
  @nrwl/node \
  @nrwl/nx-plugin \
  @nrwl/react \
  @nrwl/storybook \
  @nrwl/web

### angular goodies
yarn add \
  @angular/cdk \
  @angular/cdk-experimental \
  @nguniversal/express-engine \
  @angular/localize \
  @angular/pwa \
  @angular/material \
  @angular/service-worker \
  @scullyio/init \
  @scullyio/scully-plugin-puppeteer \
  @scullyio/scully \
  @scullyio/ng-lib \
  @ngrx/store \
  @ngrx/store-devtools \
  @ngrx/effects \
  @ngrx/router-store \
  @ngrx/entity \
  @ngrx/schematics \
  @ngrx/component-store \
  @ngrx/data \
  @ngrx/component

yarn add -D \
  @angular/elements
  @types/hammerjs

### client (ui) goodies
yarn add \
  lodash \
  moment \
  remarkable \
  uuid \
  @webcomponents/webcomponentsjs \
  ansi-to-html \
  socket.io-client \
  three \
  postprocessing \
  marked \
  markdown-it \
  tinymce \
  froala-editor \
  hammerjs \
  luxon \
  xlsx \
  pdfmake \
  x-data-spreadsheet \
  stream \
  canvas-datagrid


### nestjs graphql
yarn add \
  @nestjs/graphql \
  graphql@^15 \
  apollo-server-express

### nestjs goodies and some general utilities
yarn add -D \
  @types/bcrypt \
  @types/passport-jwt \
  @types/passport-local \
  @types/passport-google-oauth20 \
  @types/passport-local \
  @types/passport-jwt \
  @types/bcrypt \
  @types/mongoose \
  @types/js-yaml \
  @types/joi \
  @types/cache-manager \
  @types/bull \
  @types/cookie-parser \
  @types/express-session \
  @nestjs/testing \
  @types/socket.io \
  concurrently \
  @types/multer \
  @types/lodash \
  https-proxy-agent \
  sw-precache-webpack-plugin \
  workbox-webpack-plugin \
  webpack-bundle-analyzer

yarn add \
  @nestjs/terminus \
  winston \
  express-session \
  cookie-session \
  csurf \
  helmet \
  bcrypt \
  bcryptjs \
  compression \
  argon2 \
  @nestjs/serve-static \
  @nestjs/jwt \
  passport-jwt \
  mongodb \
  @nestjs/passport \
  passport \
  passport-local \
  passport-google-oauth20 \
  dotenv \
  google-auth-library \
  query-string \
  passport-facebook \
  nodemailer \
  qrcode \
  speakeasy \
  express-rate-limit \
  @nestjs/throttler \
  @nestjs/passport \
  passport \
  passport-local \
  bcrypt \
  @nestjs/jwt \
  passport-jwt \
  helmet \
  fastify-helmet \
  fastify-csrf \
  @nestjs/config \
  js-yaml \
  joi \
  cache-manager \
  @nestjs/schedule \
  @nestjs/websockets \
  @nestjs/platform-socket.io \
  socket.io-redis \
  @nestjs/microservices \
  cookie-parser \
  @nestjs/event-emitter \
  class-validator \
  class-transformer \
  body-parser \
  cors \
  @nestjs/serve-static \
  @nestjs/bull \
  bull \
  webpack-node-externals \
  start-server-webpack-plugin \
  @nestjs/cqrs \
  @nestjs/mongoose \
  mongoose \
  @nestjs/swagger \
  swagger-ui-express \
  redis \
  mqtt \
  kafkajs \
  nats \
  @prisma/client \
  @nestjs/platform-fastify \
  fastify-compress \
  fastify-cookie \
  fastify-secure-session \
  fastify-swagger \
  @grpc/proto-loader \
  @grpc/grpc-js \
  jsonwebtoken \
  lodash \
  moment \
  stripe \
  uuid \
  @webcomponents/webcomponentsjs \
  fs-extra \
  concat \
  ansi-to-html \
  socket.io-client \
  socket.io \
  multer \
  busboy \
  formidable \
  multiparty \
  adm-zip \
  jszip \
  archiver \
  @casl/ability \
  accesscontrol \
  acl \
  yup \
  rimraf \
  mkdirp \
  glob \
  shelljs \
  debug \
  commander \
  chalk \
  multicast-dns \
  chokidar \
  yargs \
  minimist \
  puppeteer \
  marked \
  markdown-it \
  tinymce \
  express-slow-down \
  md5 \
  fuse.js \
  crypto-js \
  big.js \
  focus-trap \
  focus-trap-react \
  xml2js \
  xml \
  htmlparser2 \
  domhandler \
  domutils \
  css-select \
  cheerio \
  dom-serializer \
  rewire \
  entities \
  sitemap \
  signature_pad \
  table
  
## more workspace extras
yarn add -D \
  @nx-plus/nuxt \
  @nx-plus/vue \
  @nx-plus/docusaurus \
  @twittwer/compodoc \
  @nxext/svelte \
  @nxext/stencil \
  @nxext/vite \
  @nxext/solid \
  @nx-go/nx-go \
  @angular-architects/module-federation \
  @nxrocks/nx-spring-boot \
  @trumbitta/nx-plugin-openapi \
  @jnxplus/nx-boot-maven \
  @jnxplus/nx-boot-gradle 


### removed dependencies, looks like angular builder needed this but the version that was brought in was complaining about es import syntax or something
ora 
## removed because of unsafe
colors

## libs 
nx g @nrwl/angular:lib common/ng/core --buildable --publishable --importPath=@grams/common/ng/core

## app config and generator commands ran
nx g @nrwl/angular:app reference-app-ng
nx g @nrwl/nest:app reference-api-ns

nx g @nrwl/angular:app docs-app-ng

nx g @scullyio/init:install -- --project=docs-app-ng


### learning and notes
for angular apps i noticed that if your goal is to keep main.js as small as possible (usually is), despite only loading and importing dynamic element (from common/ng) into app module, and putting everything else in init element so that it can bootstrap the heavier elements, it actually bloats main.js to the size of the metadata of the common/ng library (which grows as you add to index.ts, even if you dont use any other element/components!!)

so... made a second library, common/ng/core, which basically just includes dynamic element, thats the import that should be in app module and finally the total main.js bundle is back to 30kb!.. well under 500 now, and doesnt grow! the only way it will grow is adding more to app module or to app init service


### serving

nx serve reference-app-ng --host 0.0.0.0 --disableHostCheck