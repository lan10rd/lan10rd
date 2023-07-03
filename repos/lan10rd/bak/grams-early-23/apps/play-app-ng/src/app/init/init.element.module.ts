import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AppInitElement } from './init.element'
// import { AppBarElementModule } from '../bar/bar.element.module'
import { AppBarModule } from './bar/bar.module'

import {
    CommonNgPopopElementModule,
    CommonNgThemesElementModule,
    // CommonNgAppBarElementModule,
    CommonNgAppBarTemplateComponentModule,
    CommonNgDynamicElementModule,
    CommonNgHammerConfigModule
} from '@grams/common/ng'

@NgModule
({
    imports:
    [
        CommonModule,
        CommonNgPopopElementModule,
        CommonNgThemesElementModule,
        // CommonNgAppBarElementModule,
        CommonNgAppBarTemplateComponentModule,
        CommonNgDynamicElementModule,
        CommonNgHammerConfigModule,
        AppBarModule,
        // AppBarElementModule
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