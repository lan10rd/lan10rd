import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { CommonNgThemesEditorArtifact } from './editor.artifact'

import { CommonNgSelectElementModule } from '../../select/select.element.module'
import { CommonNgButtonElementModule } from '../../button/button.element.module'
import { CommonNgScrollElementModule } from '../../scroll/scroll.element.module'
import { CommonNgJsonArtifactModule } from '../../json/json.artifact.module'

@NgModule
({
    imports:
    [
        CommonModule,
        CommonNgSelectElementModule,
        CommonNgButtonElementModule,
        CommonNgScrollElementModule,
        CommonNgJsonArtifactModule
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