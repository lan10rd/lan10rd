import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { CommonButtonElement } from './button.element'

@NgModule
({
    imports: 
    [
        CommonModule
    ],
     declarations: 
    [
        CommonButtonElement
    ],
    exports: 
    [
        CommonButtonElement
    ],
    providers: 
    [

    ]
}) 
export class CommonButtonElementModule
{
    
}