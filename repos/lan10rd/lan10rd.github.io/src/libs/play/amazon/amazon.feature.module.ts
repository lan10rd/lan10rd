
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { PlayAmazonFeature } from './amazon.feature'

// import { CommonNgSelectElementModule, CommonNgScrollElementModule, CommonNgButtonElementModule } from '@lanl0rdjs/common-ng'

@NgModule
({
    imports:
    [
        CommonModule,
        // CommonNgSelectElementModule,
        RouterModule.forChild
        ([
            {
                path: '',
                component: PlayAmazonFeature,
                data: {
                    CommonRouterService: {
                        routes: [{path: '..', name: '..'}]
                    }
                }
            }
        ]),
        // CommonNgScrollElementModule,
        // CommonNgButtonElementModule
    ],
    declarations:
    [
        PlayAmazonFeature
    ],
    exports:
    [
        
    ],
    providers:
    [

    ]
})
export class PlayAmazonFeatureModule
{
    
}