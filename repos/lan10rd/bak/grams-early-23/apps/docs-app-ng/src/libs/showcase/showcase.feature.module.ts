import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { ShowcaseFeature } from './showcase.feature'

import { CommonNgFrameElementModule, CommonNgCodeEditorElementModule, CommonNgCodeDiffElementModule } from '@grams/common/ng'

@NgModule
({
    imports:
    [
        CommonModule,
        RouterModule.forChild
        ([{
            path: '',
            component:ShowcaseFeature,
            data: {
                CommonRouterService: {
                    routes: ['..'],
                    seo: {
                        title: 'Showcase',
                        keywords: '',
                        description: ''
                    }
                }
            }
        }]),
        CommonNgFrameElementModule,
        CommonNgCodeEditorElementModule,
        CommonNgCodeDiffElementModule
    ],
    declarations:
    [
        ShowcaseFeature
    ]
})
export class ShowcaseFeatureModule
{
    
}