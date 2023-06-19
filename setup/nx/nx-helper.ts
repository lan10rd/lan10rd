import { importsList, devImportsList } from "./imports";
const axios = require('axios');

class NxHelper {

    plugins: string[];
    
    constructor(){ this.help();}

    async help() {
        await this.init();
        await this.install();
    }

    async fetchPlugins() {
        const response = await axios.get('https://raw.githubusercontent.com/nrwl/nx/master/community/approved-plugins.json');
        const body = (await response).data
        this.plugins = body.map(plugin => plugin.name);
    }

    async init(){
        
    }

    async install(){
        await this.fetchPlugins();

        for (let plugin of this.plugins) {
            const command = 'yarn add -d ' + plugin;
        }

        for (let devDep of devImportsList) {
            const command = 'yarn add -d ' + devDep;
        }

        for (let dep of importsList) {
            const command = 'yarn add ' + dep;
        }

        console.log('success installing!');
    }
}

new NxHelper();