import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { BarComponentModule } from '../../libs/bar/bar.component.module'
import { AppInitComponent } from './init.component'
import { AppBarModule } from '../bar/bar.module'

@NgModule
({
    imports:
    [
        CommonModule,
        BarComponentModule,
        AppBarModule
    ],
    declarations:
    [
        AppInitComponent
    ]
})
export class AppInitComponentModule
{
    
}