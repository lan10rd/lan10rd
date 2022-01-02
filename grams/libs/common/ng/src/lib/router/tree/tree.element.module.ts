import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { CommonNgRouterTreeElement } from './tree.element'

@NgModule
({
    imports:
    [
        CommonModule
    ],
    exports:
    [
        CommonNgRouterTreeElement
    ],
    declarations:
    [
        CommonNgRouterTreeElement
    ]
})
export class CommonNgRouterTreeElementModule
{

}