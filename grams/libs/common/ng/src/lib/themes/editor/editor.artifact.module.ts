import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { CommonNgThemesEditorArtifact } from './editor.artifact'

import { CommonNgSelectElementModule } from '../../select/select.element.module'
import { CommonNgButtonElementModule } from '../../button/button.element.module'
import { CommonNgScrollElementModule } from '../../scroll/scroll.element.module'
import { CommonNgJsonElementModule } from '../../json/json.element.module'

@NgModule
({
    imports:
    [
        CommonModule,
        CommonNgSelectElementModule,
        CommonNgButtonElementModule,
        CommonNgScrollElementModule,
        CommonNgJsonElementModule
    ],
    declarations:
    [
        CommonNgThemesEditorArtifact
    ],
    exports:
    [
        CommonNgThemesEditorArtifact
    ],
    providers:
    [

    ]
}) 
export class CommonNgThemesEditorArtifactModule
{

}