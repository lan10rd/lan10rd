import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { CommonNgAppBarTemplateComponentModule, CommonNgPopopElementModule, CommonNgThemesElementModule } from '@grams/common/ng'
import { AppInitComponent } from './init.component'
import { AppInitBarModule } from './bar/bar.module'

@NgModule
({
    imports:
    [
        CommonModule,
        AppInitBarModule,
        CommonNgAppBarTemplateComponentModule,
        CommonNgPopopElementModule,
        CommonNgThemesElementModule
    ],
    declarations:
    [
        AppInitComponent
    ]
})
export class AppInitComponentModule
{
    
}