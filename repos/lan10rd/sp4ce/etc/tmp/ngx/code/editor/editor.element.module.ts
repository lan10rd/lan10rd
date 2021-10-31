import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { CommonNgNgxCodeEditorElement } from './editor.element'

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
        CommonNgNgxCodeEditorElement
    ],
    exports:
    [
        CommonNgNgxCodeEditorElement
    ]
})
export class CommonNgNgxCodeEditorElementModule
{

}