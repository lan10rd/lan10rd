import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AppInitBarComponent } from './bar.component'

import { CommonNgButtonElementModule, CommonNgSelectElementModule, CommonNgThemesEditorArtifactModule } from '@grams/common/ng'

@NgModule
({
    imports:
    [
        CommonModule,
        CommonNgButtonElementModule,
        CommonNgSelectElementModule,
        CommonNgThemesEditorArtifactModule
    ],
    declarations:
    [
       AppInitBarComponent
    ],
    exports: [
        AppInitBarComponent
    ]
})
export class AppInitBarModule
{
    
}