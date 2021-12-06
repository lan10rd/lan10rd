import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { ReadmeFeature } from './readme.feature'

@NgModule
({
    imports:
    [
        CommonModule,
        RouterModule.forChild
        ([{
            path: '',
            component: ReadmeFeature,
            data: {
                CommonRouterService: {
                    routes: ['..'],
                    seo: {
                        title: 'Readme',
                        keywords: '',
                        description: ''
                    }
                }
            }
        }])
    ],
    declarations:
    [
        ReadmeFeature
    ]
})
export class ReadmeFeatureModule
{
    
}