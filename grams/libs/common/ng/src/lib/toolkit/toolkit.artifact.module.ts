import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { CommonNgToolkitArtifact } from './toolkit.artifact'

import { CommonNgSelectElementModule } from '../select/select.element.module'
import { CommonNgRouterElementModule } from '../router/router.element.module'
import { CommonNgButtonElementModule } from '../button/button.element.module'
import { CommonNgScrollElementModule } from '../scroll/scroll.element.module'
import { CommonNgJsonArtifactModule } from '../json/json.artifact.module'
import { CommonNgCodeTerminalElementModule } from '../code/terminal/terminal.element.module'
import { CommonNgJoiElementModule } from '../joi/joi.element.module'
import { CommonNgHttpArtifactModule } from '../http/http.artifact.module'
import { CommonNgFrameSandboxElementModule } from '../frame/sandbox/sandbox.element.module'
import { CommonNgCodeEditorElementModule } from '../code/editor/editor.element.module'
import { CommonNgCodeDiffElementModule } from '../code/diff/diff.element.module'

@NgModule
({
    imports:
    [
        CommonModule,
        FormsModule,
        CommonNgSelectElementModule,
        CommonNgRouterElementModule,
        CommonNgButtonElementModule,
        CommonNgScrollElementModule,
        CommonNgJsonArtifactModule,
        CommonNgCodeTerminalElementModule,
        CommonNgHttpArtifactModule,
        CommonNgJoiElementModule,
        CommonNgFrameSandboxElementModule,
        CommonNgCodeEditorElementModule,
        CommonNgCodeDiffElementModule
    ],
    exports:
    [
        CommonNgToolkitArtifact
    ],
    declarations:
    [
        CommonNgToolkitArtifact
    ]
})
export class CommonNgToolkitArtifactModule
{

}