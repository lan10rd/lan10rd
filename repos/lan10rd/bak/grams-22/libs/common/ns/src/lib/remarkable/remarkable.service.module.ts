import { Module } from '@nestjs/common'

import { CommonNsRemarkableService } from './remarkable.service'

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
        CommonNsRemarkableService
    ],
    exports:
    [
        CommonNsRemarkableService
    ]
})
export class CommonNsRemarkableServiceModule
{

}
