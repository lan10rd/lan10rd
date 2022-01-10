import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { CommonNgCodeDiffElement } from './diff.element'

@NgModule
({
    imports:
    [
        CommonModule
    ],
    declarations:
    [
        CommonNgCodeDiffElement
    ],
    exports:
    [
        CommonNgCodeDiffElement
    ]
})
export class CommonNgCodeDiffElementModule
{

}