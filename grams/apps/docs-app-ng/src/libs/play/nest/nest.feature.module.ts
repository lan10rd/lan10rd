import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { PlayNestFeature } from './nest.feature'

@NgModule
({
    imports:
    [
        CommonModule,
        RouterModule.forChild
        ([
            {
                path: '',
                component: PlayNestFeature,
                data: {
                    CommonRouterService: {
                        routes: ['..'],
                        seo: {
                            title: 'Play json',
                            keywords: 'play json',
                            description: 'play json'
                        }
                    }
                }
            }
        ])
    ],
    declarations:
    [
        PlayNestFeature
    ]
})
export class PlayNestFeatureModule
{
    
}