import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AppBarLeftElement } from './left.element'

import { CommonNgButtonElementModule, CommonNgVisualDropShadowElementModule } from '@grams/common/ng'

@NgModule
({
    imports:
    [
        CommonModule,
        CommonNgButtonElementModule,
        CommonNgVisualDropShadowElementModule
    ],
    declarations:
    [
        AppBarLeftElement
    ],
    exports:
    [
        AppBarLeftElement
    ],
    providers:
    [

    ]
}) 
export class AppBarLeftElementModule
{

}