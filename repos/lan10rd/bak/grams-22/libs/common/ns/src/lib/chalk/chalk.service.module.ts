import { Module } from '@nestjs/common'

import { CommonNsChalkService } from './chalk.service'

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
        CommonNsChalkService
    ],
    exports:
    [
        CommonNsChalkService
    ]
})
export class CommonNsChalkServiceModule
{

}
