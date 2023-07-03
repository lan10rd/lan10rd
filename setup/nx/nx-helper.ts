#!/usr/bin/env ts-node

import { Installer } from './imports';
import { command } from './command';
const process = require('process');
const os = require('os');

export class NxHelper {

    async help() {
        await this.init();
        const installer = new Installer();
        await installer.installPlugins();
        await installer.installDevDependencies();
        await installer.installDependencies();
    }

    async init(name = 'grams') {
        process.chdir(os.homedir() + '/lan10rd/setup/nx')
        console.log(await command(`npx -y create-nx-workspace@latest --pm=yarn --name=${name} --nx-cloud=n --preset=empty`));
        process.chdir(os.homedir() + '/lan10rd/setup/nx/' + name);
    }
}