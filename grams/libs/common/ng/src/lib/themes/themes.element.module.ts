import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { CommonNgThemesElement } from './themes.element'

import { CommonNgDynamicElementModule } from '../dynamic/dynamic.element.module'
import { CommonNgSanitizerPipeModule } from '../sanitizer/sanitizer.pipe.module'

@NgModule
({
    imports:
    [
        CommonModule,
        CommonNgDynamicElementModule,
        CommonNgSanitizerPipeModule
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