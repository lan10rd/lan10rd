import { Module } from '@nestjs/common'

import { CommonNsHealthService } from './health.service'

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
        CommonNsHealthService
    ],
    exports:
    [
        CommonNsHealthService
    ]
})
export class CommonNsHealthServiceModule
{

}
