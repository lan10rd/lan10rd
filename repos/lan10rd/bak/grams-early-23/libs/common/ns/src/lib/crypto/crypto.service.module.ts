import { Module } from '@nestjs/common'

import { CommonNsCryptoService } from './crypto.service'

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
        CommonNsCryptoService
    ],
    exports:
    [
        CommonNsCryptoService
    ]
})
export class CommonNsCryptoServiceModule
{

}
