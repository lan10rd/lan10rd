import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { CommonNgPopopElement } from './popop.element'

import { CommonNgDynamicElementModule } from '../dynamic/dynamic.element.module'

@NgModule
({
    imports:
    [
        CommonModule,
        CommonNgDynamicElementModule
    ],
    declarations:
    [
        CommonNgPopopElement
    ],
    exports:
    [
        CommonNgPopopElement
    ],
    providers:
    [

    ]
}) 
export class CommonNgPopopElementModule
{

}