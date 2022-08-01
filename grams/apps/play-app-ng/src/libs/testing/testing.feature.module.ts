import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { TestingFeature } from './testing.feature'

@NgModule
({
    imports:
    [
        CommonModule,
        RouterModule.forChild
        ([
            {
                path: '',
                component: TestingFeature,
                data: {
                    CommonRouterService: {
                        routes: ['..'],
                        seo: {
                            title: 'Testing',
                            keywords: 'testing',
                            description: 'testing'
                        }
                    }
                }
            }
        ])
    ],
    declarations:
    [
        TestingFeature
    ]
})
export class TestingFeatureModule
{
    
}