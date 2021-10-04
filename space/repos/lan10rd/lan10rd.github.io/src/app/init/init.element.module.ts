import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AppInitElement } from './init.element'

import { CommonRouterElementModule } from '../../libs/common/router/router.element.module'

@NgModule
({
    imports:
    [
        CommonModule,
        CommonRouterElementModule
    ],
    declarations:
    [
        AppInitElement
    ],
    exports:
    [
        AppInitElement
    ],
    providers:
    [

    ]
}) 
export class AppInitElementModule
{

}