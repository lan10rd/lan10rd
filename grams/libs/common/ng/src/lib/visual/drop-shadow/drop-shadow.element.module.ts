import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { CommonNgVisualDropShadowElement } from './drop-shadow.element'

@NgModule
({
    imports:
    [
        CommonModule
    ],
    declarations:
    [
        CommonNgVisualDropShadowElement
    ],
    exports:
    [
        CommonNgVisualDropShadowElement
    ]
})
export class CommonNgVisualDropShadowElementModule
{

}