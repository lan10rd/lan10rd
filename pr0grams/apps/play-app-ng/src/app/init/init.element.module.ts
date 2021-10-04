import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AppInitElement } from './init.element'

import { CommonNgRouterElementModule, CommonNgPopopElementModule, CommonNgThemesElementModule } from '@lanl0rd/common/ng'

@NgModule
({
    imports:
    [
        CommonModule,
        CommonNgRouterElementModule,
        CommonNgPopopElementModule,
        CommonNgThemesElementModule
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