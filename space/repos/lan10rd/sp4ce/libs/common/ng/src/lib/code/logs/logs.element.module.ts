import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { CommonNgCodeLogsElement } from './logs.element'

@NgModule
({
    imports:
    [
        CommonModule
    ],
    declarations:
    [
        CommonNgCodeLogsElement
    ],
    exports:
    [
        CommonNgCodeLogsElement
    ]
})
export class CommonNgCodeLogsElementModule
{

}