import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AppBarLeftElement } from './left.element'

import { CommonNgButtonElementModule } from '@grams/common/ng'

@NgModule
({
    imports:
    [
        CommonModule,
        CommonNgButtonElementModule
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