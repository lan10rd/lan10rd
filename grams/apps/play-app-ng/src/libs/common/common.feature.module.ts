import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { CommonFeature } from './common.feature'

import { CommonNgSelectElementModule, CommonNgCodeLogsElementModule, CommonNgScrollElementModule, CommonNgButtonElementModule, CommonNgAudioElementModule, CommonNgVideoElementModule } from '@lanl0rd/common/ng'

@NgModule
({
    imports:
    [
        CommonModule,
        RouterModule.forChild
        ([{
            path: '',
            component: CommonFeature,
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
        CommonFeature
    ]
})
export class CommonFeatureModule
{
    
}