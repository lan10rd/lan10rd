import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AppLandingFeatureModule } from '../landing/landing.feature.module'

import { AppInitComponent } from './init.component'

@NgModule
({
    imports:
    [
        CommonModule,
        AppLandingFeatureModule
    ],
    declarations:
    [
        AppInitComponent
    ]
})
export class AppInitComponentModule
{
    
}