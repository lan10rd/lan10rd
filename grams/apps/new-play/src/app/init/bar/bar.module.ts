import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AppInitBarComponent } from './bar.component'
import { AppInitBarRightComponent } from './right/right.component'
import { AppInitBarLeftComponent } from './left/left.component'

import {
    CommonNgButtonElementModule,
    CommonNgSelectElementModule,
    CommonNgThemesEditorArtifactModule,
    CommonNgRouterElementModule,
    CommonNgToolkitArtifactModule
} from '@grams/common/ng'

@NgModule
({
    imports:
    [
        CommonModule,
        CommonNgButtonElementModule,
        CommonNgSelectElementModule,
        CommonNgThemesEditorArtifactModule,
        CommonNgRouterElementModule,
        CommonNgToolkitArtifactModule
    ],
    declarations:
    [
       AppInitBarComponent,
       AppInitBarRightComponent,
       AppInitBarLeftComponent
    ],
    exports: [
        AppInitBarComponent,
        AppInitBarRightComponent,
        AppInitBarLeftComponent
    ]
})
export class AppInitBarModule
{
    
}