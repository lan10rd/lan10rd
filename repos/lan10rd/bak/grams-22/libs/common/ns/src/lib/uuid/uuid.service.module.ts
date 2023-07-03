import { Module } from '@nestjs/common'

import { CommonNsUuidService } from './uuid.service'

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
        CommonNsUuidService
    ],
    exports:
    [
        CommonNsUuidService
    ]
})
export class CommonNsUuidServiceModule
{

}
