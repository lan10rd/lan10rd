import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { CommonNgAppBarElement } from './app-bar.element'

@NgModule
({
    imports:
    [
        CommonModule
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