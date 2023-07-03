import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { CommonNgJoiElement } from './joi.element'

import { CommonNgButtonElementModule } from '../button/button.element.module'

@NgModule
({
    imports:
    [
        CommonModule,
        FormsModule,
        CommonNgButtonElementModule
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