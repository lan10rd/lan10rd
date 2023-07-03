import { Module } from '@nestjs/common'

import { CommonNsMinimistService } from './minimist.service'

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
        CommonNsMinimistService
    ],
    exports:
    [
        CommonNsMinimistService
    ]
})
export class CommonNsMinimistServiceModule
{

}
