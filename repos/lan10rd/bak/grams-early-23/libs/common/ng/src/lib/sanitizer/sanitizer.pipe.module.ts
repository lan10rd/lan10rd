import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { CommonNgSanitizerPipe } from './sanitizer.pipe'

@NgModule
({
    imports:
    [
        CommonModule
    ],
    declarations:
    [
      CommonNgSanitizerPipe
    ],
    exports:
    [
      CommonNgSanitizerPipe
    ],
    providers:
    [

    ]
}) 
export class CommonNgSanitizerPipeModule
{

}