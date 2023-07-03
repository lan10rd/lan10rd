import { Module } from '@nestjs/common'
import { APP_FILTER } from '@nestjs/core'

import { AppExceptionFilter } from './app.exception.filter'


@Module
({
    imports:
    [

    ],
    controllers:
    [

    ],
    exports:
    [

    ],
    providers:
    [
        {
            provide: APP_FILTER,
            useClass: AppExceptionFilter,
        }
    ]
})
export class AppExceptionFilterModule
{


}
