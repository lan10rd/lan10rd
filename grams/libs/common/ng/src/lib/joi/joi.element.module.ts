import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { CommonNgJoiElement } from './joi.element'

@NgModule
({
    imports:
    [
        CommonModule,
        FormsModule
    ],
    declarations:
    [
        CommonNgJoiElement
    ],
    exports:
    [
        CommonNgJoiElement
    ],
    providers:
    [

    ]
}) 
export class CommonNgJoiElementModule
{

}