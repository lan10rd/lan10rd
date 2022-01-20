import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { CommonNgHttpArtifact } from './http.artifact'

import { CommonNgButtonElementModule } from '../button/button.element.module'

@NgModule
({
    imports:
    [
        CommonModule,
        FormsModule,
        CommonNgButtonElementModule
    ],
    declarations:
    [
        CommonNgHttpArtifact
    ],
    exports:
    [
        CommonNgHttpArtifact
    ],
    providers:
    [

    ]
}) 
export class CommonNgHttpArtifactModule
{

}