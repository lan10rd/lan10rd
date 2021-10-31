import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { CommonDynamicElement } from './dynamic.element'
import { CommonDynamicDirective } from './dynamic.directive'

@NgModule
({
    imports: 
    [
        CommonModule
    ],
    declarations: 
    [
        CommonDynamicElement,
        CommonDynamicDirective
    ],
    exports: 
    [
        CommonDynamicElement,
        CommonDynamicDirective
    ],
    providers: 
    [

    ]
}) 
export class CommonDynamicElementModule
{
    
}