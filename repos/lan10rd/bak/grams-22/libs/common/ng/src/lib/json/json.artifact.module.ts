import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { CommonNgJsonArtifact } from './json.artifact'

import { CommonNgDynamicElementModule } from '../dynamic/dynamic.element.module'
import { CommonNgButtonElementModule } from '../button/button.element.module'
import { CommonNgScrollElementModule } from '../scroll/scroll.element.module'
import { CommonNgSelectElementModule } from '../select/select.element.module'

@NgModule
({
    imports:
    [
        CommonModule,
        FormsModule,
        CommonNgDynamicElementModule,
        CommonNgButtonElementModule,
        CommonNgScrollElementModule,
        CommonNgSelectElementModule
    ],
    declarations:
    [
        CommonNgJsonArtifact
    ],
    exports:
    [
        CommonNgJsonArtifact
    ],
    providers:
    [

    ]
}) 
export class CommonNgJsonArtifactModule
{

}