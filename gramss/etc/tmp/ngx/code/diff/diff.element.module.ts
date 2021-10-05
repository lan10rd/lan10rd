import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { CommonNgNgxCodeDiffElement } from './diff.element'

import { MonacoEditorModule } from 'ngx-monaco-editor'

@NgModule
({
    imports:
    [
        CommonModule,
        FormsModule,
        MonacoEditorModule
    ],
    declarations:
    [
        CommonNgNgxCodeDiffElement
    ],
    exports:
    [
        CommonNgNgxCodeDiffElement
    ]
})
export class CommonNgNgxCodeDiffElementModule
{

}