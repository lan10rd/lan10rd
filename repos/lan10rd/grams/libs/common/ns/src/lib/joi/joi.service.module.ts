import { Module } from '@nestjs/common'

import { CommonNsJoiService } from './joi.service'

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
        CommonNsJoiService
    ],
    exports:
    [
        CommonNsJoiService
    ]
})
export class CommonNsJoiServiceModule
{

}
