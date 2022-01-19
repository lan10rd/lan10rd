import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { CommonNgHttpElement } from './http.element'

@NgModule
({
    imports:
    [
        CommonModule,
        FormsModule
    ],
    declarations:
    [
        CommonNgHttpElement
    ],
    exports:
    [
        CommonNgHttpElement
    ],
    providers:
    [

    ]
}) 
export class CommonNgHttpElementModule
{

}