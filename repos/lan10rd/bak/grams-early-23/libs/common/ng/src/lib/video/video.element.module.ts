import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { CommonNgVideoElement } from './video.element'

@NgModule
({
    imports:
    [
        CommonModule
    ],
    declarations:
    [
        CommonNgVideoElement
    ],
    exports:
    [
        CommonNgVideoElement
    ]
})
export class CommonNgVideoElementModule
{

}