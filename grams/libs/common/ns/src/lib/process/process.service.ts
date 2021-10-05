import { Injectable } from '@nestjs/common'

import { CommonNsUtilService } from '../util/util.service'

@Injectable()
export class CommonNsProcessService
{

    childProcess = require('child_process')

    _exec

    constructor
    (
        public readonly util: CommonNsUtilService
    )
    {
        this._exec = util.util.promisify(this.childProcess.exec)
    }

    async exec
    (
    	cmd: string,
        options?: any
    )
    {
        try { return await this._exec(cmd, options) } catch(e) { throw e }
    }

    spawn
    (
        cmd : string,
        options ?: any
    )
    {
        let cmd_splits = cmd.split(' ')
        let entry = cmd_splits.shift()
        let spawn = this.childProcess.spawn(entry, cmd_splits)
        spawn.stdout.setEncoding('utf-8')
        spawn.stderr.setEncoding('utf-8')

        // logs.stdout.on('data', data => { socket.emit('logs', data) })
        // logs.stderr.on('data', data => { socket.emit('logs', data) })
        // socket.on('disconnect', () => {
        //     logs.stdout.end()
        //     logs.stderr.end()
        //     logs.kill('SIGKILL')
        // })

        return spawn
    }

}