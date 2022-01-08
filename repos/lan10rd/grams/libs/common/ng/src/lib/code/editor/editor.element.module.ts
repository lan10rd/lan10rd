import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { CommonNgCodeEditorElement } from './editor.element'

@NgModule
({
    imports:
    [
        CommonModule
    ],
    declarations:
    [
        CommonNgCodeEditorElement
    ],
    exports:
    [
        CommonNgCodeEditorElement
    ]
})
export class CommonNgCodeEditorElementModule
{

}