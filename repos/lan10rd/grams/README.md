# grams

This project was generated using [Nx](https://nx.dev).

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

🔎 **Smart, Extensible Build Framework**

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

There are also many [community plugins](https://nx.dev/nx-community) you could add.

## Generate an application

Run `nx g @nrwl/react:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `nx g @nrwl/react:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@lanl0rd/mylib`.

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






nx g @nrwl/nest:lib common/ns --buildable --publishable --importPath=@lanl0rdjs/common-ns
nx g @nrwl/angular:lib common/ng --publishable --buildable --importPath=@lanl0rdjs/common-ng


(--buildable is for pre built stuff, publishable is to make it npm ready, at which point you can do npm build libname, then cd dist/libname and npm publish)

nx build lib-name
cd dist/libs/lib-name
npm login

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
npm publish --scope=@lanl0rdjs --access public
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~





==== aggregated deps ====
yarn add @nestjs/event-emitter mongodb lodash moment query-string commander chalk helmet cors compression csurf cookie-parser express-session cookie-session body-parser @nestjs/throttler express-rate-limit @nestjs/terminus @nestjs/schedule chokidar js-yaml multicast-dns @nestjs/websockets @nestjs/platform-socket.io @nestjs/schedule

yarn add -D @types/express-session @types/cookie-parser @types/cron @types/socket.io 



--- dependencies reasons ---

-- host api --
yarn add @nestjs/websockets @nestjs/platform-socket.io @nestjs/schedule
yarn add -D @types/socket.io @types/cron

yarn add chokidar js-yaml multicast-dns

-- common ns --
- scheduler -
yarn add @nestjs/schedule 
yarn add -D @types/cron

- health -
@nestjs/terminus 

- main.ts (app) --
=rate limiting=
yarn add @nestjs/throttler express-rate-limit
 
=csrf=
yarn add csurf cookie-parser express-session cookie-session body-parser
yarn add -D @types/express-session @types/cookie-parser

=compression=
yarn add compression

=cors=
yarn add cors

=helmet=
yarn add helmet

=Logger=
yarn add chalk

=command line=
yarn add commander

=query-string=
yarn add query-string

=moment=
yarn add moment

=lodash=
yarn add lodash

=data/bases/mongo=
yarn add mongodb

--- just to have ---
yarn add @nestjs/event-emitter




--- all of the ones needed for work-space (passport/payments)

yarn rm




 -- base mono repo stuff --
yarn add -D --registry http://localhost:4873 @nrwl/angular @nrwl/nest @nrwl/express @nrwl/cypress @nrwl/next @nrwl/node @nrwl/nx-plugin @nrwl/react @nrwl/storybook @nrwl/web nx-electron @nx-tools/nx-docker @nx-plus/nuxt @nx-plus/vue @nx-plus/docusaurus @twittwer/compodoc @nxext/svelte @nxext/stencil  @angular-architects/module-federation   @nxrocks/nx-spring-boot socket.io-client joi dotenv moment remarkable lodash three postprocessing uuid 

-- passport api --

npm install --registry http://localhost:4873 @nestjs/terminus  winston express-session cookie-session csurf helmet bcrypt bcryptjs compression argon2 @nestjs/serve-static @nestjs/jwt passport-jwt mongodb @nestjs/passport passport passport-local passport-google-oauth20 dotenv google-auth-library query-string passport-facebook nodemailer qrcode speakeasy express-rate-limit @nestjs/throttler

npm i -D --registry http://localhost:4873 @types/bcrypt @types/passport-jwt @types/passport-local @types/passport-google-oauth20


-- works nest -- (arm64) sudo apt install libtool autoconf automake --

npm i --registry http://localhost:4873 @nestjs/passport passport passport-local  bcrypt @nestjs/jwt passport-jwt helmet fastify-helmet csurf fastify-csrf  express-rate-limit @nestjs/config js-yaml joi cache-manager @nestjs/schedule @nestjs/websockets @nestjs/platform-socket.io socket.io-redis @nestjs/microservices cookie-parser @nestjs/event-emitter compression express-session  class-validator class-transformer body-parser cors @nestjs/serve-static @nestjs/bull bull webpack-node-externals start-server-webpack-plugin  @nestjs/terminus @nestjs/cqrs @nestjs/mongoose  mongoose @nestjs/swagger swagger-ui-express redis mqtt kafkajs nats @prisma/client @nestjs/platform-fastify fastify-compress fastify-cookie fastify-secure-session fastify-swagger @grpc/proto-loader @grpc/grpc-js qrcode speakeasy nodemailer jsonwebtoken lodash moment remarkable stripe uuid @webcomponents/webcomponentsjs

npm i -D --registry http://localhost:4873 @types/passport-local @types/passport-jwt @types/bcrypt @types/mongoose  @types/js-yaml @types/joi @types/cache-manager @types/bull @types/cookie-parser @types/express-session @nestjs/testing @types/socket.io @angular/elements


-- works ui --

ng add @nguniversal/express-engine @angular/localize @angular/pwa @angular/material --project works
-soon- ng add @ngrx/store@latest @ngrx/store-devtools@latest @ngrx/effects@latest @ngrx/router-store@latest @ngrx/entity@latest @ngrx/schematics@latest @ngrx/component-store@latest @ngrx/data@latest @ngrx/component@latest @scullyio/init

npm i --registry https://npm.glass.earth socket.io-client joi dotenv moment remarkable lodash three postprocessing uuid
npm i -D --registry https://npm.glass.earth @types/lodash https-proxy-agent




-- inside container, build tools --
sudo apt install libtool autoconf automake

took out typescript, good god angular complains









- full -
yarn add -D \
  @nrwl/angular \
  @nrwl/nest \
  @nrwl/express \
  @nrwl/cypress \
  @nrwl/next \
  @nrwl/node \
  @nrwl/nx-plugin \
  @nrwl/react \
  @nrwl/storybook \
  @nrwl/web \
  nx-electron \
  @nx-tools/nx-docker \
  @nx-plus/nuxt \
  @nx-plus/vue \
  @nx-plus/docusaurus \
  @twittwer/compodoc \
  @nxext/svelte \
  @nxext/stencil \
  @angular-architects/module-federation \
  @nxrocks/nx-spring-boot \
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
  @angular/elements \
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
  remarkable \
  stripe \
  uuid \
  @webcomponents/webcomponentsjs \
  fs-extra \
  ansi-to-html \
  socket.io-client \
  socket.io \
  @angular/cdk \
  @angular/cdk-experimental \
  @nguniversal/express-engine \
  @angular/localize \
  @angular/pwa \
  @angular/material \
  multer \
  busboy \
  formidable \
  multiparty \
  adm-zip \
  jszip \
  archiver \
  three \
  postprocessing \
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

  @ngrx/store \
  @ngrx/store-devtools \
  @ngrx/effects \
  @ngrx/router-store \
  @ngrx/entity \
  @ngrx/schematics \
  @ngrx/component-store \
  @ngrx/data \
  @ngrx/component \
  @scullyio/init \
  yargs \
  minimist \
  colors \
  ora \
  puppeteer \
  marked \
  markdown-it \
  tinymce \
  froala-editor \
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
  @angular/service-worker \
  entities \
  @scullyio/init \
  @scullyio/scully \
  @scullyio/ng-lib \
  @scullyio/scully-plugin-puppeteer