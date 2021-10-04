import { Module } from '@nestjs/common'

import { CommonNsStreamsService } from './streams.service'

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
        CommonNsStreamsService
    ],
    exports:
    [
        CommonNsStreamsService
    ]
})
export class CommonNsStreamsServiceModule
{

}
