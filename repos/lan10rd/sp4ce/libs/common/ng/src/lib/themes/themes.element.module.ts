import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { CommonNgThemesElement } from './themes.element'

import { CommonNgDynamicElementModule } from '../dynamic/dynamic.element.module'

@NgModule
({
    imports:
    [
        CommonModule,
        CommonNgDynamicElementModule
    ],
    declarations:
    [
        CommonNgThemesElement
    ],
    exports:
    [
        CommonNgThemesElement
    ],
    providers:
    [

    ]
}) 
export class CommonNgThemesElementModule
{

}