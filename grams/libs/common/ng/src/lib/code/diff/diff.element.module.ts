import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { CommonNgCodeDiffElement } from './diff.element'

@NgModule
({
    imports:
    [
        CommonModule,
        FormsModule
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