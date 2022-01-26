import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { PlayNestNest2Nest3Feature } from './nest3.feature'

@NgModule
({
    imports:
    [
        CommonModule,
        RouterModule.forChild
        ([
            {
                path: '',
                component: PlayNestNest2Nest3Feature,
                data: {
                    CommonRouterService: {
                        routes: ['..', 'nest4'],
                        seo: {
                            title: 'Play nest3',
                            keywords: 'play nest 3',
                            description: 'play nest 3'
                        }
                    }
                }
            },
            {
                path: 'nest4',
                loadChildren: async () => (await import('./nest4/nest4.feature.module')).PlayNestNest2Nest3Nest4FeatureModule
            }
        ])
    ],
    declarations:
    [
        PlayNestNest2Nest3Feature
    ]
})
export class PlayNestNest2Nest3FeatureModule
{
    
}