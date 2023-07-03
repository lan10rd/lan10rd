import { Module } from '@nestjs/common'

import { CommonNsCryptoBcryptService } from './bcrypt.service'

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
        CommonNsCryptoBcryptService
    ],
    exports:
    [
        CommonNsCryptoBcryptService
    ]
})
export class CommonNsCryptoBcryptServiceModule
{

}
