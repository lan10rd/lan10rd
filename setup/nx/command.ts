const { exec } = require('node:child_process');

export const command = async (cmd:string) => {
    return new Promise((resolve, reject) => {
        console.log(cmd)
        exec(cmd, (error: any, stdout: any, stderr: any) => {
            if (error) {
                return reject(error);
            }
            if (stderr) {
                return resolve(stderr + stdout);
            }
            return resolve(stdout);
        });
    })
}