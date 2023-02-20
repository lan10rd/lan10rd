import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AppInitBarComponent } from './bar.component'

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
       AppInitBarComponent
    ],
    exports: [
        AppInitBarComponent
    ]
})
export class AppInitBarModule
{
    
}