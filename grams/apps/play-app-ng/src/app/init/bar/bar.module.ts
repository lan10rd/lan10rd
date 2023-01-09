import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AppBarComponent } from './bar.component'

import { CommonNgRouterElementModule, CommonNgButtonElementModule, CommonNgAppBarArtifactModule, CommonNgSelectElementModule, CommonNgDynamicElementModule } from '@grams/common/ng'

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