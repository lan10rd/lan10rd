import axios from 'axios';
import { command } from './command';

export const importsList = [

    // angular 

    "@angular/cdk",
    "@angular/cdk-experimental",
    "@nguniversal/express-engine",
    "@angular/localize",
    "@angular/pwa",
    "@angular/material",
    "@angular/service-worker",
    "@scullyio/init",
    "@scullyio/scully-plugin-puppeteer",
    "@scullyio/scully",
    "@scullyio/ng-lib",
    "@ngrx/store",
    "@ngrx/store-devtools",
    "@ngrx/effects",
    "@ngrx/router-store",
    "@ngrx/entity",
    "@ngrx/schematics",
    "@ngrx/component-store",
    "@ngrx/data",
    "@ngrx/component",


    // ui 
    "lodash",
    "moment",
    "remarkable",
    "uuid",
    "@webcomponents/webcomponentsjs",
    "ansi-to-html",
    "socket.io-client",
    "three",
    "postprocessing",
    "marked",
    "markdown-it",
    "tinymce",
    "froala-editor",
    "hammerjs",
    "luxon",
    "xlsx",
    "pdfmake",
    "x-data-spreadsheet",
    "stream",
    "canvas-datagrid",
    "monaco-editor",


    // nestjs deps
    "@nestjs/graphql",
    "graphql@^15",
    "apollo-server-express",

    // api dependencies
    "faker",
    "@nestjs/terminus",
    "winston",
    "express-session",
    "cookie-session",
    "csurf",
    "helmet",
    "bcrypt",
    "bcryptjs",
    "compression",
    "argon2",
    "@nestjs/serve-static",
    "@nestjs/jwt",
    "passport-jwt",
    "mongodb",
    "@nestjs/passport",
    "passport",
    "passport-local",
    "passport-google-oauth20",
    "dotenv",
    "google-auth-library",
    "query-string",
    "passport-facebook",
    "nodemailer",
    "qrcode",
    "speakeasy",
    "express-rate-limit",
    "@nestjs/throttler",
    "@nestjs/passport",
    "passport",
    "passport-local",
    "bcrypt",
    "@nestjs/jwt",
    "passport-jwt",
    "helmet",
    "fastify-helmet",
    "fastify-csrf",
    "@nestjs/config",
    "js-yaml",
    "joi",
    "cache-manager",
    "@nestjs/schedule",
    "@nestjs/websockets",
    "@nestjs/platform-socket.io",
    "socket.io-redis",
    "@nestjs/microservices",
    "cookie-parser",
    "@nestjs/event-emitter",
    "class-validator",
    "class-transformer",
    "body-parser",
    "cors",
    "@nestjs/serve-static",
    "@nestjs/bull",
    "bull",
    "webpack-node-externals",
    "start-server-webpack-plugin",
    "@nestjs/cqrs",
    "@nestjs/mongoose",
    "mongoose",
    "@nestjs/swagger",
    "swagger-ui-express",
    "redis",
    "mqtt",
    "kafkajs",
    "nats",
    "@prisma/client",
    "@nestjs/platform-fastify",
    "fastify-compress",
    "fastify-cookie",
    "fastify-secure-session",
    "fastify-swagger",
    "@grpc/proto-loader",
    "@grpc/grpc-js",
    "jsonwebtoken",
    "lodash",
    "moment",
    "stripe",
    "uuid",
    "@webcomponents/webcomponentsjs",
    "fs-extra",
    "concat",
    "ansi-to-html",
    "socket.io-client",
    "socket.io",
    "multer",
    "busboy",
    "formidable",
    "multiparty",
    "adm-zip",
    "jszip",
    "archiver",
    "@casl/ability",
    "accesscontrol",
    "acl",
    "yup",
    "rimraf",
    "mkdirp",
    "glob",
    "shelljs",
    "debug",
    "commander",
    "chalk",
    "multicast-dns",
    "chokidar",
    "yargs",
    "minimist",
    "puppeteer",
    "marked",
    "markdown-it",
    "tinymce",
    "express-slow-down",
    "md5",
    "fuse.js",
    "crypto-js",
    "big.js",
    "focus-trap",
    "focus-trap-react",
    "xml2js",
    "xml",
    "htmlparser2",
    "domhandler",
    "domutils",
    "css-select",
    "cheerio",
    "dom-serializer",
    "rewire",
    "entities",
    "sitemap",
    "signature_pad",
    "table",
    "cross-env",
    "systeminformation",
    "dbus-next",
    "blauzahn",
    "chatgpt",
    "axios",
    "ts-node"
]

export const devImportsList = [
    // nx workspace plugins
    "@nx/workspace",
    "@nx/devkit",
    "@nx/angular",
    "@nx/cypress",
    "@nx/detox",
    "@nx/esbuild",
    "@nx/eslint-plugin",
    "@nx/expo",
    "@nx/express",
    "@nx/jest",
    "@nx/js",
    "@nx/linter",
    "@nx/nest",
    "@nx/next",
    "@nx/node",
    "@nx/plugin",
    "@nx/react",
    "@nx/react-native",
    "@nx/rollup",
    "@nx/rspack",
    "@nx/storybook",
    "@nx/vite",
    "@nx/web",
    "@nx/webpack",

    // angular dev deps
    "@angular/elements",
    "@types/hammerjs",
    "ng-mocks",
    "@types/node",

    // api dev dependencies
    "@types/bcrypt",
    "@types/passport-jwt",
    "@types/passport-local",
    "@types/passport-google-oauth20",
    "@types/passport-local",
    "@types/passport-jwt",
    "@types/bcrypt",
    "@types/mongoose",
    "@types/js-yaml",
    "@types/joi",
    "@types/cache-manager",
    "@types/bull",
    "@types/cookie-parser",
    "@types/express-session",
    "@nestjs/testing",
    "@types/socket.io",
    "concurrently",
    "@types/multer",
    "@types/lodash",
    "https-proxy-agent",
    "sw-precache-webpack-plugin",
    "workbox-webpack-plugin",
    "webpack-bundle-analyzer"
]

export class Installer {

    async installPlugins() {

        const plugins = ((await axios.get('https://raw.githubusercontent.com/nrwl/nx/master/community/approved-plugins.json')).data as any[]).map(p => p.name);

        for (let plugin of plugins) {
            try { 
                console.log(await command('yarn add --dev ' + plugin));
            } catch(e) {
                console.log('failed to add plugin: ', plugin)
            }
        }

        console.log('finished installing plugins...');
    }

    async printPlugins() {

        const plugins = ((await axios.get('https://raw.githubusercontent.com/nrwl/nx/master/community/approved-plugins.json')).data as any[]).map(p => p.name);

        for (let plugin of plugins) {
            console.log(plugin);
        }

    }

    async installDevDependencies() {

        for (let devDep of devImportsList) {
            try {
                console.log(await command('yarn add --dev ' + devDep));
            } catch(e) {
                console.log('failed to import dev dependency: ', devDep)
            }
            
        }
        console.log('finished installing dev dependencies...');
    }

    async printDevDependencies() {

        for (let devDep of devImportsList) {
            console.log(devDep);
        }

    }

    async installDependencies() {

        for (let dep of importsList) {
            try {
                console.log(await command('yarn add ' + dep));
            } catch(e) {
                console.log('failed to import dependency: ', dep)
            }
        }

        console.log('finished installing dependencies!');
    }

    async printDependencies() {

        for (let dep of importsList) {
            console.log('yarn add ' + dep);
        }

    }
}