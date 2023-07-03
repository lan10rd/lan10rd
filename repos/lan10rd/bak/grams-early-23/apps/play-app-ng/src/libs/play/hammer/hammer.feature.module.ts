import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { PlayHammerFeature } from './hammer.feature'

import { PlayHammerPanElementModule } from './pan/pan.element.module'
import { PlayHammerPressElementModule } from './press/press.element.module'
import { PlayHammerRotateElementModule } from './rotate/rotate.element.module'
import { PlayHammerSwipeElementModule } from './swipe/swipe.element.module'
import { PlayHammerTapElementModule } from './tap/tap.element.module'

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
        PlayHammerPressElementModule,
        PlayHammerRotateElementModule,
        PlayHammerSwipeElementModule,
        PlayHammerTapElementModule
    ],
    declarations:
    [
        PlayHammerFeature
    ]
})
export class PlayHammerFeatureModule
{
    
}