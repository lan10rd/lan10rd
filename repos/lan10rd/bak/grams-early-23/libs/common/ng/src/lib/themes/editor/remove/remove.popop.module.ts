import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { CommonNgThemesEditorRemovePopop } from './remove.popop'

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
        CommonNgThemesEditorRemovePopop
    ],
    exports:
    [
        CommonNgThemesEditorRemovePopop
    ],
    providers:
    [

    ]
}) 
export class CommonNgThemesEditorRemovePopopModule
{

}