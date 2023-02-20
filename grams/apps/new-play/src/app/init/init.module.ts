import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { CommonNgAppBarTemplateComponentModule } from '@grams/common/ng'
import { AppInitComponent } from './init.component'
import { AppInitBarModule } from './bar/bar.module'

@NgModule
({
    imports:
    [
        CommonModule,
        AppInitBarModule,
        CommonNgAppBarTemplateComponentModule
    ],
    declarations:
    [
        AppInitComponent
    ]
})
export class AppInitComponentModule
{
    
}