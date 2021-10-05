import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { ScrollingModule } from '@angular/cdk/scrolling'
import { CommonNgScrollElement } from './scroll.element'

@NgModule
({
    imports:
    [
        CommonModule,
        FormsModule,
        ScrollingModule
    ],
    exports:
    [
        CommonNgScrollElement
    ],
    declarations:
    [
        CommonNgScrollElement
    ],
})
export class CommonNgScrollElementModule
{

}