import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { CommonNgFrameSandboxElement } from './sandbox.element'

import { CommonNgFrameElementModule } from '../frame.element.module'
import { CommonNgCodeEditorElementModule } from '../../code/editor/editor.element.module'

@NgModule
({
    imports:
    [
        CommonModule,
        FormsModule,
        CommonNgFrameElementModule,
        CommonNgCodeEditorElementModule
    ],
    declarations:
    [
        CommonNgFrameSandboxElement
    ],
    exports:
    [
        CommonNgFrameSandboxElement
    ],
    providers:
    [

    ]
}) 
export class CommonNgFrameSandboxElementModule
{

}