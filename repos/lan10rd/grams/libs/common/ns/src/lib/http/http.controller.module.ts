import { Module } from '@nestjs/common'

import { CommonNsHttpController } from './http.controller'

@Module
({
    imports:
    [

    ],
    controllers:
    [
        CommonNsHttpController
    ],
    providers:
    [

    ]
})
export class CommonNsHttpControllerModule
{

}

