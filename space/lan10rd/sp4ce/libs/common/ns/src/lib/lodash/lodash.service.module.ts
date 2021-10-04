import { Module } from '@nestjs/common'

import { CommonNsLodashService } from './lodash.service'

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
        CommonNsLodashService
    ],
    exports:
    [
        CommonNsLodashService
    ]
})
export class CommonNsLodashServiceModule
{

}
