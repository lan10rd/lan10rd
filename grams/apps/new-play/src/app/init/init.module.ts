import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

// import { BarComponentModule } from '../../libs/bar/bar.component.module'
import { CommonNgAppBarTemplateComponentModule } from '@grams/common/ng'
import { AppInitComponent } from './init.component'
import { AppBarModule } from '../bar/bar.module'

@NgModule
({
    imports:
    [
        CommonModule,
        // BarComponentModule,
        AppBarModule,
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