import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { CommonNgJsonElement } from './json.element'

import { CommonNgDynamicElementModule } from '../dynamic/dynamic.element.module'

@NgModule
({
    imports:
    [
        CommonModule,
        FormsModule,
        CommonNgDynamicElementModule
    ],
    declarations:
    [
        CommonNgJsonElement
    ],
    exports:
    [
        CommonNgJsonElement
    ],
    providers:
    [

    ]
}) 
export class CommonNgJsonElementModule
{

}