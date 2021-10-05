import { Module } from '@nestjs/common'

import { CommonNsJsonService } from './json.service'

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
        CommonNsJsonService
    ],
    exports:
    [
        CommonNsJsonService
    ]
})
export class CommonNsJsonServiceModule
{

}
