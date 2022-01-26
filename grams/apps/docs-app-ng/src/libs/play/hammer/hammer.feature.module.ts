import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { PlayHammerFeature } from './hammer.feature'

import { PlayHammerPanElementModule } from './pan/pan.element.module'
import { PlayHammerPressElementModule } from './press/press.element.module'

@NgModule
({
    imports:
    [
        CommonModule,
        RouterModule.forChild
        ([
            {
                path: '',
                component: PlayHammerFeature,
                data: {
                    CommonRouterService: {
                        routes: ['..'],
                        seo: {
                            title: 'Play hammer',
                            keywords: 'play hammer',
                            description: 'play hammer'
                        }
                    }
                }
            }
        ]),
        PlayHammerPanElementModule,
        PlayHammerPressElementModule
    ],
    declarations:
    [
        PlayHammerFeature
    ]
})
export class PlayHammerFeatureModule
{
    
}