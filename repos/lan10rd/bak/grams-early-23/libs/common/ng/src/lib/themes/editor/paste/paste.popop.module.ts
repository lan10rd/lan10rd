import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { CommonNgThemesEditorPastePopop } from './paste.popop'

import { CommonNgButtonElementModule } from '../../../button/button.element.module'

@NgModule
({
    imports:
    [
        CommonModule,
        FormsModule,
        CommonNgButtonElementModule
    ],
    declarations:
    [
        CommonNgThemesEditorPastePopop
    ],
    exports:
    [
        CommonNgThemesEditorPastePopop
    ],
    providers:
    [

    ]
}) 
export class CommonNgThemesEditorPastePopopModule
{

}