import { Module, HttpModule } from '@nestjs/common'

import { CommonNsHttpService } from './http.service'

import { CommonNsRxjsServiceModule } from '../rxjs/rxjs.service.module'

@Module({
    imports:
    [
        HttpModule,
        CommonNsRxjsServiceModule
    ],
    providers: 
    [
        CommonNsHttpService
    ],
    exports:
    [
        CommonNsHttpService
    ]
})
export class CommonNsHttpServiceModule
{
    
}