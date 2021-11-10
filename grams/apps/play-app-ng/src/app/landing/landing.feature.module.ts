import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import {ScrollingModule} from '@angular/cdk/scrolling';
import {ScrollingModule as ExperimentalScrollingModule} from '@angular/cdk-experimental/scrolling';
import { CommonNgSelectElementModule, CommonNgScrollElementModule } from '@grams/common/ng'

import { AppLandingFeature } from './landing.feature'

// import { UiScrollModule } from 'ngx-ui-scroll';

@NgModule
({
    imports:
    [
        CommonModule,
        RouterModule.forChild
        ([{
            path: '',
            component: AppLandingFeature,
            data: {
                CommonRouterService: {
                    routes: ['common', 'play']
                }
            }
        }]),
        ScrollingModule,
        ExperimentalScrollingModule,
        CommonNgSelectElementModule,
        CommonNgScrollElementModule,
        // UiScrollModule
    ],
    declarations:
    [
        AppLandingFeature
    ]
})
export class AppLandingFeatureModule
{
    
}