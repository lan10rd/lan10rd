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
                        routes: ['..', 'apple'],
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