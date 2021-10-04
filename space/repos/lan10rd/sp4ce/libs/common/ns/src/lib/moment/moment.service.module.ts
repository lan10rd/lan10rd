import { Module } from '@nestjs/common'

import { CommonNsMomentService } from './moment.service'

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
        CommonNsMomentService
    ],
    exports:
    [
        CommonNsMomentService
    ]
})
export class CommonNsMomentServiceModule
{

}
