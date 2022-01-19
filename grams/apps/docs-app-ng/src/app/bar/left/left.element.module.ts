import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AppBarLeftElement } from './left.element'

import
{
    CommonNgSelectElementModule,
    CommonNgRouterElementModule,
    CommonNgButtonElementModule,
    CommonNgJsonArtifactModule,
    CommonNgCodeTerminalElementModule,
    CommonNgHttpElementModule,
    CommonNgFrameSandboxElementModule
} from '@grams/common/ng'

@NgModule
({
    imports:
    [
        CommonModule,
        CommonNgSelectElementModule,
        CommonNgRouterElementModule,
        CommonNgButtonElementModule,
        CommonNgJsonArtifactModule,
        CommonNgCodeTerminalElementModule,
        CommonNgHttpElementModule,
        CommonNgFrameSandboxElementModule
    ],
    declarations:
    [
        AppBarLeftElement
    ],
    exports:
    [
        AppBarLeftElement
    ],
    providers:
    [

    ]
}) 
export class AppBarLeftElementModule
{

}