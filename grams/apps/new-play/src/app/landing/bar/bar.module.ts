import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { LandingBarComponent } from './bar.component'

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
        LandingBarComponent
    ],
    exports: [
        LandingBarComponent
    ]
})
export class LandingBarModule
{
    
}