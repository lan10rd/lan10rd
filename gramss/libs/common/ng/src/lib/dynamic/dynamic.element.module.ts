import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { CommonNgDynamicElement } from './dynamic.element'
import { CommonNgDynamicDirective } from './dynamic.directive'

@NgModule
({
    imports: 
    [
        CommonModule
    ],
    declarations: 
    [
        CommonNgDynamicElement,
        CommonNgDynamicDirective
    ],
    exports: 
    [
        CommonNgDynamicElement,
        CommonNgDynamicDirective
    ],
    providers: 
    [

    ]
}) 
export class CommonNgDynamicElementModule
{
    
}