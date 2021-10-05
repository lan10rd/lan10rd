import { Module } from '@nestjs/common'

import { CommonNsDotEnvService } from './dot-env.service'

@Module
({
    imports:
    [

    ],
    controllers:
    [

    ],
    providers:
    [
        CommonNsDotEnvService
    ],
    exports:
    [
        CommonNsDotEnvService
    ]
})
export class CommonNsDotEnvServiceModule
{

}
