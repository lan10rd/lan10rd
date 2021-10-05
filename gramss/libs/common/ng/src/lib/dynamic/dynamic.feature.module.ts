import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { CommonNgDynamicFeature } from './dynamic.feature'

import { CommonNgDynamicElementModule } from './dynamic.element.module'

@NgModule
({
    imports: 
    [
        CommonModule,
        CommonNgDynamicElementModule,
        RouterModule.forChild
        ([
            {
                path: '',
                component: CommonNgDynamicFeature
            }
        ])
    ],
     declarations: 
    [
        CommonNgDynamicFeature
    ],
    exports: 
    [
        CommonNgDynamicFeature,
        RouterModule
    ],
    providers: 
    [

    ]
}) 
export class CommonNgDynamicFeatureModule
{
    
}