import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { PlayAppleFeature } from './apple.feature'

@NgModule
({
    imports:
    [
        CommonModule,
        RouterModule.forChild
        ([{
            path: '',
            component: PlayAppleFeature,
            data: {
                CommonRouterService: {
                    routes: ['..'],
                    seo: {
                        title: 'Play Apple',
                        keywords: 'play apple',
                        description: 'play apple'
                    }
                }
            }
        }])
    ],
    declarations:
    [
        PlayAppleFeature
    ]
})
export class PlayAppleFeatureModule
{
    
}