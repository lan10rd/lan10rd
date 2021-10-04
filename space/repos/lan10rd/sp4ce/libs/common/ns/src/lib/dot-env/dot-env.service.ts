import { Injectable } from '@nestjs/common'

@Injectable()
export class CommonNsDotEnvService
{

    dotenv = require('dotenv')
    config

    constructor
    (
    )
    {
        this.config = this.dotenv.config({path: process.env.DOT_ENV_PATH ? process.env.DOT_ENV_PATH : '.env'})
    }

}