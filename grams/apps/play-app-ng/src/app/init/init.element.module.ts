import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AppInitElement } from './init.element'
import { AppBarElementModule } from '../bar/bar.element.module'

import { CommonNgPopopElementModule, CommonNgThemesElementModule, CommonNgAppBarElementModule, CommonNgDynamicElementModule, CommonNgHammerConfigModule } from '@grams/common/ng'

@NgModule
({
    imports:
    [
        CommonModule,
        CommonNgPopopElementModule,
        CommonNgThemesElementModule,
        CommonNgAppBarElementModule,
        CommonNgDynamicElementModule,
        CommonNgHammerConfigModule,
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