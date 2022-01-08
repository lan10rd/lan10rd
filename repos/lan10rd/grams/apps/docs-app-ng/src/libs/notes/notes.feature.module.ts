import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { NotesFeature } from './notes.feature'

import { CommonNgSelectElementModule } from '@grams/common/ng'

@NgModule
({
    imports:
    [
        CommonModule,
        RouterModule.forChild
        ([{
            path: '',
            component: NotesFeature,
            data: {
                CommonRouterService: {
                    routes: ['..'],
                    seo: {
                        title: 'Notes',
                        keywords: 'notes',
                        description: 'notes'
                    }
                }
            }
        }]),
        CommonNgSelectElementModule
    ],
    declarations:
    [
        NotesFeature
    ]
})
export class NotesFeatureModule
{
    
}