import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { CommonNgAppBarTemplateComponent } from './bar-template.component'

@NgModule
({
    imports:
    [
        CommonModule
    ],
    declarations:
    [
        CommonNgAppBarTemplateComponent
    ],
    exports:
    [
        CommonNgAppBarTemplateComponent
    ]
})
export class CommonNgAppBarTemplateComponentModule
{
    
}