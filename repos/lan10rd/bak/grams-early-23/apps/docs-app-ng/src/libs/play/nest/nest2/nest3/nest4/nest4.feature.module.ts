import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { PlayNestNest2Nest3Nest4Feature } from './nest4.feature'

@NgModule
({
    imports:
    [
        CommonModule,
        RouterModule.forChild
        ([
            {
                path: '',
                component: PlayNestNest2Nest3Nest4Feature,
                data: {
                    CommonRouterService: {
                        routes: ['..'],
                        seo: {
                            title: 'Play nest 4',
                            keywords: 'play nest 4',
                            description: 'play nest 4'
                        }
                    }
                }
            }
        ])
    ],
    declarations:
    [
        PlayNestNest2Nest3Nest4Feature
    ]
})
export class PlayNestNest2Nest3Nest4FeatureModule
{
    
}