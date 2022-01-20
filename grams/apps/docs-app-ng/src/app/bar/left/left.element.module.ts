import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AppBarLeftElement } from './left.element'

import
{
    CommonNgSelectElementModule,
    CommonNgRouterElementModule,
    CommonNgButtonElementModule,
    CommonNgJsonArtifactModule,
    CommonNgCodeTerminalElementModule,
    CommonNgJoiElementModule,
    CommonNgHttpArtifactModule,
    CommonNgFrameSandboxElementModule,
    CommonNgCodeEditorElementModule,
    CommonNgCodeDiffElementModule
} from '@grams/common/ng'

@NgModule
({
    imports:
    [
        CommonModule,
        CommonNgSelectElementModule,
        CommonNgRouterElementModule,
        CommonNgButtonElementModule,
        CommonNgJsonArtifactModule,
        CommonNgCodeTerminalElementModule,
        CommonNgHttpArtifactModule,
        CommonNgJoiElementModule,
        CommonNgFrameSandboxElementModule,
        CommonNgCodeEditorElementModule,
        CommonNgCodeDiffElementModule
    ],
    declarations:
    [
        AppBarLeftElement
    ],
    exports:
    [
        AppBarLeftElement
    ],
    providers:
    [

    ]
}) 
export class AppBarLeftElementModule
{

}