import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { PlayJsonFeature } from './json.feature'

import { CommonNgJsonArtifactModule } from '@grams/common/ng'

@NgModule
({
    imports:
    [
        CommonModule,
        RouterModule.forChild
        ([
            {
                path: '',
                component: PlayJsonFeature,
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
        ]),
        CommonNgJsonArtifactModule
    ],
    declarations:
    [
        PlayJsonFeature
    ]
})
export class PlayJsonFeatureModule
{
    
}