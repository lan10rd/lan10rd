import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AppBarComponent } from './bar.component'

import { CommonNgButtonElementModule } from '@grams/common/ng'

@NgModule
({
    imports:
    [
        CommonModule,
        CommonNgButtonElementModule
    ],
    declarations:
    [
       AppBarComponent
    ],
    exports: [
        AppBarComponent
    ]
})
export class AppBarModule
{
    
}