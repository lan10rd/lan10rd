import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { AppLandingFeature } from './landing.feature'

@NgModule
({
    imports:
    [
        CommonModule,
        RouterModule.forChild
        ([{
            path: '',
            component: AppLandingFeature,
            data: {
                CommonRouterService: {
                    routes: ['common', 'play', 'list']
                }
            }
        }])
    ],
    declarations:
    [
        AppLandingFeature
    ]
})
export class AppLandingFeatureModule
{
    
}