import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { ShowcaseFeature } from './showcase.feature'

@NgModule
({
    imports:
    [
        CommonModule,
        RouterModule.forChild
        ([{
            path: '',
            component:ShowcaseFeature,
            data: {
                CommonRouterService: {
                    routes: ['..'],
                    seo: {
                        title: 'Showcase',
                        keywords: '',
                        description: ''
                    }
                }
            }
        }])
    ],
    declarations:
    [
        ShowcaseFeature
    ]
})
export class ShowcaseFeatureModule
{
    
}