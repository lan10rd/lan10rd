import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { CommonNgButtonElement } from './button.element'

@NgModule
({
    imports: 
    [
        CommonModule
    ],
     declarations: 
    [
        CommonNgButtonElement
    ],
    exports: 
    [
        CommonNgButtonElement
    ],
    providers: 
    [

    ]
}) 
export class CommonNgButtonElementModule
{
    
}
