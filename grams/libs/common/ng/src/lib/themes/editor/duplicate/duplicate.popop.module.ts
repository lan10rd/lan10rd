import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { CommonNgThemesEditorDuplicatePopop } from './duplicate.popop'

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
        CommonNgThemesEditorDuplicatePopop
    ],
    exports:
    [
        CommonNgThemesEditorDuplicatePopop
    ],
    providers:
    [

    ]
}) 
export class CommonNgThemesEditorDuplicatePopopModule
{

}