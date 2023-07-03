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
                        routes: ['..', 'nest2', 'nest2child'],
                        seo: {
                            title: 'Play nest',
                            keywords: 'play nest',
                            description: 'play nest'
                        }
                    }
                },
                children: [
                    {
                        path: 'nest2child',
                        loadChildren: async () => (await import('./nest2/nest2.feature.module')).PlayNestNest2FeatureModule
                    }
                ]
            },
            {
                path: 'nest2',
                loadChildren: async () => (await import('./nest2/nest2.feature.module')).PlayNestNest2FeatureModule
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