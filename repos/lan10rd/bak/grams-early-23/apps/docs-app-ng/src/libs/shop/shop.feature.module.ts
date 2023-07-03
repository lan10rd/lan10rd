import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { ShopFeature } from './shop.feature'

@NgModule
({
    imports:
    [
        CommonModule,
        RouterModule.forChild
        ([
            {
                path: '',
                component: ShopFeature,
                data: {
                    CommonRouterService: {
                        routes: ['..'],
                        seo: {
                            title: 'Shop lan10rd',
                            keywords: 'Shop lan10rd',
                            description: 'Shop lan10rd'
                        }
                    }
                }
            }
        ])
    ],
    declarations:
    [
        ShopFeature
    ]
})
export class ShopFeatureModule
{
    
}