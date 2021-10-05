import { Injectable, Inject } from '@nestjs/common'
import { timer } from 'rxjs'
import { readFileSync } from 'fs'
import * as yaml from 'js-yaml'
import { join } from 'path'

@Injectable()
export class AppService
{

    _timer : any
    _options : any
    copying : boolean = false

    getData
    (
    )
    {
        return { message: 'Welcome to copy-api-ns!' }
    }

    constructor
    (
    )
    {
        const YAML_CONFIG_FILENAME = process.env.COPY_API_NS_CONFIG || '../../../apps/copy-api-ns/src/config.yaml'
        this._options = yaml.load(readFileSync(join(__dirname, YAML_CONFIG_FILENAME), 'utf8'),)
    }

    async onApplicationBootstrap
    (
    )
    {
        this.setup()
    }

    setup
    (
    )
    {
        this._timer = timer(0, eval(this._options.rate)).subscribe(x => { this.copy() })
    }

    async copy
    (
    )
    {
        if (!this.copying)
        {
            this.copying = true
            console.log('primary', this._options.primary)
            if (this._options?.secondary.length > 0)
            {
                console.log('secondary', this._options.secondary)
            }
        }
        this.copying = false
    }

}
