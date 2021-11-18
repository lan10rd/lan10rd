import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AppInitElement } from './init.element'
import { AppBarElementModule } from '../bar/bar.element.module'

import { CommonNgRouterElementModule, CommonNgPopopElementModule, CommonNgThemesElementModule, CommonNgButtonElementModule, CommonNgAppBarElementModule } from '@grams/common/ng'

@NgModule
({
    imports:
    [
        CommonModule,
        CommonNgRouterElementModule,
        CommonNgPopopElementModule,
        CommonNgThemesElementModule,
        CommonNgButtonElementModule,
        CommonNgAppBarElementModule,
        AppBarElementModule
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