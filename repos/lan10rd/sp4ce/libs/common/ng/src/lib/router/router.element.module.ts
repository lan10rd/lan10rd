import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { CommonNgRouterElement } from './router.element'

import { CommonNgSelectElementModule } from '../select/select.element.module'

@NgModule
({
    imports:
    [
        CommonModule,
        CommonNgSelectElementModule
    ],
    exports:
    [
        CommonNgRouterElement
    ],
    declarations:
    [
        CommonNgRouterElement
    ]
})
export class CommonNgRouterElementModule
{

}