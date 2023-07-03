import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'

import { PlayNotificationsFeature } from './notifications.feature'

import { CommonNgButtonElementModule } from '@grams/common/ng'

@NgModule
({
    imports:
    [
        CommonModule,
        FormsModule,
        RouterModule.forChild
        ([
            {
                path: '',
                component: PlayNotificationsFeature,
                data: {
                    CommonRouterService: {
                        routes: ['..'],
                        seo: {
                            title: 'Play Notifications',
                            keywords: 'play Notifications',
                            description: 'play Notifications'
                        }
                    }
                }
            }
        ]),
        CommonNgButtonElementModule
    ],
    declarations:
    [
        PlayNotificationsFeature
    ]
})
export class PlayNotificationsFeatureModule
{
    
}