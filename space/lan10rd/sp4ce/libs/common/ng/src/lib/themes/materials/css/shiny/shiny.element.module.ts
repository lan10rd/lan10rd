import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { CommonThemesMaterialsCssShinyElement } from './shiny.element'

@NgModule
({
    imports:
    [
        CommonModule
    ],
    declarations:
    [
        CommonThemesMaterialsCssShinyElement
    ],
    exports:
    [
        CommonThemesMaterialsCssShinyElement
    ],
    providers:
    [

    ]
}) 
export class CommonThemesMaterialsCssShinyElementModule
{

}