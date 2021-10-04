import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { CommonNgAudioElement } from './audio.element'

@NgModule
({
    imports:
    [
        CommonModule
    ],
    declarations:
    [
        CommonNgAudioElement
    ],
    exports:
    [
        CommonNgAudioElement
    ]
})
export class CommonNgAudioElementModule
{

}