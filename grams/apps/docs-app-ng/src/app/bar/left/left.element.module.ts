import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AppBarLeftElement } from './left.element'

import
{
    CommonNgSelectElementModule,
    CommonNgButtonElementModule,
    CommonNgRouterElementModule,
    CommonNgToolkitArtifactModule
} from '@grams/common/ng'

@NgModule
({
    imports:
    [
        CommonModule,
        CommonNgSelectElementModule,
        CommonNgButtonElementModule,
        CommonNgRouterElementModule,
        CommonNgToolkitArtifactModule
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