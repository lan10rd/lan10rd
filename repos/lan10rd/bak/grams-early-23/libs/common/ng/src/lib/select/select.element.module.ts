import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { CommonNgSelectElement } from './select.element'

import { CommonNgScrollElementModule } from '../scroll/scroll.element.module'
import { CommonNgButtonElementModule } from '../button/button.element.module'

import {ScrollingModule} from '@angular/cdk/scrolling';
import {ScrollingModule as ExperimentalScrollingModule} from '@angular/cdk-experimental/scrolling';

@NgModule
({
    imports:
    [
        CommonModule,
        FormsModule,
        CommonNgScrollElementModule,
        CommonNgButtonElementModule,
        ScrollingModule,
        ExperimentalScrollingModule,
    ],
    declarations:
    [
        CommonNgSelectElement
    ],
    exports:
    [
        CommonNgSelectElement
    ]
})
export class CommonNgSelectElementModule
{

}