import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AppBarRightElement } from './right.element'

import { CommonNgSelectElementModule, CommonNgThemesEditorArtifactModule } from '@grams/common/ng'

@NgModule
({
    imports:
    [
        CommonModule,
        CommonNgSelectElementModule,
        CommonNgThemesEditorArtifactModule
    ],
    declarations:
    [
        AppBarRightElement
    ],
    exports:
    [
        AppBarRightElement
    ],
    providers:
    [

    ]
}) 
export class AppBarRightElementModule
{

}