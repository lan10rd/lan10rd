import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AppBarRightElement } from './right.element'

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
        AppBarRightElement
    ],
    exports:
    [
        AppBarRightElement
    ],
    providers:
    [

    ]
}) 
export class AppBarRightElementModule
{

}