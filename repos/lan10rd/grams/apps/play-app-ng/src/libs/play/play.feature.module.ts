import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { PlayFeature } from './play.feature'

import { CommonNgSelectElementModule, CommonNgCodeLogsElementModule, CommonNgScrollElementModule, CommonNgButtonElementModule, CommonNgAudioElementModule, CommonNgVideoElementModule } from '@grams/common/ng'

@NgModule
({
    imports:
    [
        CommonModule,
        RouterModule.forChild
        ([{
            path: '',
            component: PlayFeature,
            data: {
                CommonRouterService: {
                    routes: ['..']
                }
            }
        }]),
        CommonNgSelectElementModule,
        CommonNgCodeLogsElementModule,
        CommonNgScrollElementModule,
        CommonNgButtonElementModule,
        CommonNgAudioElementModule,
        CommonNgVideoElementModule
    ],
    declarations:
    [
        PlayFeature
    ]
})
export class PlayFeatureModule
{
    
}