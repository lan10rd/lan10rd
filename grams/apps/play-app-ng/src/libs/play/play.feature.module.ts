import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { PlayFeature } from './play.feature'

@NgModule
({
    imports:
    [
        CommonModule,
        RouterModule.forChild
        ([
            {
                path: '',
                component: PlayFeature,
                data: {
                    CommonRouterService: {
                        routes: ['..', 'apple', 'json', 'nest', 'hammer'],
                        seo: {
                            title: 'Play',
                            keywords: 'play',
                            description: 'play'
                        }
                    }
                }
            },
            {
                path: 'apple',
                loadChildren: async () => (await import('./apple/apple.feature.module')).PlayAppleFeatureModule
            },
            {
                path: 'json',
                loadChildren: async () => (await import('./json/json.feature.module')).PlayJsonFeatureModule
            },
            {
                path: 'nest',
                loadChildren: async () => (await import('./nest/nest.feature.module')).PlayNestFeatureModule
            },
            {
                path: 'hammer',
                loadChildren: async () => (await import('./hammer/hammer.feature.module')).PlayHammerFeatureModule
            }
        ])
    ],
    declarations:
    [
        PlayFeature
    ]
})
export class PlayFeatureModule
{
    
}