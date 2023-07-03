import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { CommonPopPopop } from './pop.popop'

import { CommonNgSelectElementModule } from '@grams/common/ng'

@NgModule
({
    imports:
    [
        CommonModule,
        FormsModule,
        CommonNgSelectElementModule
    ],
    declarations:
    [
        CommonPopPopop
    ],
    exports:
    [
        CommonPopPopop
    ]
})
export class CommonPopPopopModule
{
    
}