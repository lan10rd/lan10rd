import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { BarComponent } from './bar.component'
import { DynamicModule } from '../dynamic/dynamic.module'

@NgModule
({
    imports:
    [
        CommonModule,
        DynamicModule
    ],
    declarations:
    [
        BarComponent
    ],
    exports:
    [
        BarComponent
    ]
})
export class BarComponentModule
{
    
}