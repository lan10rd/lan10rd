import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AppBarElement } from './bar.element'
import { AppBarLeftElementModule } from './left/left.element.module'
import { AppBarRightElementModule } from './right/right.element.module'

import { CommonNgRouterElementModule, CommonNgButtonElementModule, CommonNgAppBarElementModule, CommonNgAppBarArtifactModule } from '@grams/common/ng'

@NgModule
({
    imports:
    [
        CommonModule,
        CommonNgRouterElementModule,
        CommonNgButtonElementModule,
        CommonNgAppBarElementModule,
        AppBarLeftElementModule,
        AppBarRightElementModule,
        CommonNgAppBarArtifactModule
    ],
    declarations:
    [
        AppBarElement
    ],
    exports:
    [
        AppBarElement
    ],
    providers:
    [

    ]
}) 
export class AppBarElementModule
{

}