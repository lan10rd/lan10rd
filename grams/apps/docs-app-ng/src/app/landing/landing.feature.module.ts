import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { AppLandingFeature } from './landing.feature'

// import { CommonNgSelectElementModule, CommonNgButtonElementModule } from '@grams/common/ng'

@NgModule
({
    imports:
    [
        CommonModule,
        // CommonNgSelectElementModule,
        // CommonNgButtonElementModule,
        RouterModule.forChild
        ([{
            path: '',
            component: AppLandingFeature,
            data: {
                CommonRouterService: {
                    routes: ['notes', 'readme'],
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