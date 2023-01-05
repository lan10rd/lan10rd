import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { DynamicComponent } from './dynamic.component'
import { DynamicDirective } from './dynamic.directive'

@NgModule
({
    imports:
    [
        CommonModule
    ],
    declarations:
    [
        DynamicComponent,
        DynamicDirective
    ],
    exports:
    [
        DynamicComponent,
        DynamicDirective
    ]
})
export class DynamicModule
{
    
}