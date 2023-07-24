const process = require('process');
const os = require('os');
import { Installer } from './imports';
import { NxHelper } from './nx-helper';

let helper = new NxHelper();
helper.help(process.argv[2], 'true'); 

// const installer = new Installer();
// installer.printDependencies();