import { Module } from '@nestjs/common'

import { CommonNsRxjsService } from './rxjs.service'

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
        CommonNsRxjsService
    ],
    exports:
    [
        CommonNsRxjsService
    ]
})
export class CommonNsRxjsServiceModule
{

}
