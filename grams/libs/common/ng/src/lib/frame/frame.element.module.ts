import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { CommonNgFrameElement } from './frame.element'

@NgModule
({
    imports:
    [
        CommonModule,
        FormsModule
    ],
    declarations:
    [
        CommonNgFrameElement
    ],
    exports:
    [
        CommonNgFrameElement
    ],
    providers:
    [

    ]
}) 
export class CommonNgFrameElementModule
{

}