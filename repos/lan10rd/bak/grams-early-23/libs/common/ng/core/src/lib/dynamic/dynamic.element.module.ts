import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { CommonNgCoreDynamicElement } from './dynamic.element'
import { CommonNgCoreDynamicDirective } from './dynamic.directive'

@NgModule
({
    imports: 
    [
        CommonModule
    ],
    declarations: 
    [
        CommonNgCoreDynamicElement,
        CommonNgCoreDynamicDirective
    ],
    exports: 
    [
        CommonNgCoreDynamicElement,
        CommonNgCoreDynamicDirective
    ],
    providers: 
    [

    ]
}) 
export class CommonNgCoreDynamicElementModule
{
    
}