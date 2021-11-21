import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { ListFeature } from './list.feature'

import { CommonNgSelectElementModule, CommonNgCodeLogsElementModule, CommonNgScrollElementModule, CommonNgButtonElementModule, CommonNgAudioElementModule, CommonNgVideoElementModule, CommonNgJsonElementModule } from '@grams/common/ng'

// import {ScrollingModule} from '@angular/cdk/scrolling';
// import {ScrollingModule as ExperimentalScrollingModule} from '@angular/cdk-experimental/scrolling';

@NgModule
({
    imports:
    [
        CommonModule,
        RouterModule.forChild
        ([{
            path: '',
            component: ListFeature,
            data: {
                CommonRouterService: {
                    routes: ['..'],
                    seo: {
                        keywords: 'list',
                        description: 'list'
                    }
                }
            }
        }]),
        CommonNgSelectElementModule,
        CommonNgCodeLogsElementModule,
        CommonNgScrollElementModule,
        CommonNgButtonElementModule,
        CommonNgAudioElementModule,
        CommonNgVideoElementModule,
        CommonNgJsonElementModule
    ],
    declarations:
    [
        ListFeature
    ]
})
export class ListFeatureModule
{
    
}