import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { CommonNgCodeTerminalElement } from './terminal.element'

import { CommonNgCodeLogsElementModule } from '../logs/logs.element.module'

@NgModule
({
    imports:
    [
        CommonModule,
        FormsModule,
        CommonNgCodeLogsElementModule
    ],
    declarations:
    [
        CommonNgCodeTerminalElement
    ],
    exports:
    [
        CommonNgCodeTerminalElement
    ]
})
export class CommonNgCodeTerminalElementModule
{

}