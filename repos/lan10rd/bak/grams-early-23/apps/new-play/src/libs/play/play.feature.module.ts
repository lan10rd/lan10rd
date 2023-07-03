import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { AppPlayFeature } from './play.feature'

import { CommonNgButtonElementModule, CommonNgCodeEditorElementModule } from '@grams/common/ng'

@NgModule
({
    imports:
    [
        CommonModule,
        CommonNgButtonElementModule,
        CommonNgCodeEditorElementModule,
        RouterModule.forChild
        ([{
            path: '',
            component: AppPlayFeature,
            data: {
                CommonRouterService: {
                    routes: [],
                    seo: {
                        title: 'App - Play',
                        keywords: 'play keywords',
                        description: 'play description'
                    }
                }
            }
        }])
    ],
    declarations:
    [
        AppPlayFeature
    ]
})
export class AppPlayFeatureModule
{
    
}