import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { BearclawFeature } from './bearclaw.feature'

@NgModule
({
    imports:
    [
        CommonModule,
        RouterModule.forChild
        ([
            {
                path: '',
                component: BearclawFeature,
                data: {
                    CommonRouterService: {
                        routes: ['..'],
                        seo: {
                            title: 'Bearclaw ai',
                            keywords: 'bearclaw ai chatgpt',
                            description: 'bearclaw ai chatgpt '
                        }
                    }
                }
            }
        ])
    ],
    declarations:
    [
        BearclawFeature
    ]
})
export class BearclawFeatureModule
{
    
}