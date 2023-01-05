import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { AppLandingFeature } from './landing.feature'

import { CommonNgButtonElementModule } from '@grams/common/ng'
import { LandingBarModule } from './bar/bar.module'

@NgModule
({
    imports:
    [
        CommonModule,
        CommonNgButtonElementModule,
        LandingBarModule,
        RouterModule.forChild
        ([{
            path: '',
            component: AppLandingFeature,
            data: {
                CommonRouterService: {
                    routes: [],
                    seo: {
                        title: 'App - Landing',
                        keywords: 'keywords',
                        description: 'description'
                    }
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