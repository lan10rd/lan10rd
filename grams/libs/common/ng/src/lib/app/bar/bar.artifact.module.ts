import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { CommonNgAppBarArtifact } from './bar.artifact'

import { CommonNgDynamicElementModule } from '../../dynamic/dynamic.element.module'
import { CommonNgButtonElementModule } from '../../button/button.element.module'
import { CommonNgAppBarElementModule } from './bar.element.module'

@NgModule
({
    imports:
    [
        CommonModule,
        CommonNgDynamicElementModule,
        CommonNgButtonElementModule,
        CommonNgAppBarElementModule
    ],
    exports:
    [
        CommonNgAppBarArtifact
    ],
    declarations:
    [
        CommonNgAppBarArtifact
    ]
})
export class CommonNgAppBarArtifactModule
{

}