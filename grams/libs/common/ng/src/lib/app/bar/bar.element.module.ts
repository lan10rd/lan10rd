import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { CommonNgAppBarElement } from './bar.element'

import { CommonNgDynamicElementModule } from '../../dynamic/dynamic.element.module'

@NgModule
({
    imports:
    [
        CommonModule,
        CommonNgDynamicElementModule
    ],
    exports:
    [
        CommonNgAppBarElement
    ],
    declarations:
    [
        CommonNgAppBarElement
    ]
})
export class CommonNgAppBarElementModule
{

}