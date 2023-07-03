import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { PlayNestNest2Feature } from './nest2.feature'

@NgModule
({
    imports:
    [
        CommonModule,
        RouterModule.forChild
        ([
            {
                path: '',
                component: PlayNestNest2Feature,
                data: {
                    CommonRouterService: {
                        routes: ['..', 'nest3'],
                        seo: {
                            title: 'Play nest 2',
                            keywords: 'play nest 2',
                            description: 'play nest 2'
                        }
                    }
                }
            },
            {
                path: 'nest3',
                loadChildren: async () => (await import('./nest3/nest3.feature.module')).PlayNestNest2Nest3FeatureModule
            }
        ])
    ],
    declarations:
    [
        PlayNestNest2Feature
    ]
})
export class PlayNestNest2FeatureModule
{
    
}