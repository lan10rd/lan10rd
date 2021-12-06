import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { NotesFeature } from './notes.feature'

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
                        keywords: '',
                        description: ''
                    }
                }
            }
        }])
    ],
    declarations:
    [
        NotesFeature
    ]
})
export class NotesFeatureModule
{
    
}