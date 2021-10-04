import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MonacoEditorModule } from 'ngx-monaco-editor'

@NgModule
({
    imports:
    [
        CommonModule,
        MonacoEditorModule.forRoot
        ({
            onMonacoLoad: () => { window.postMessage({monaco: {loaded: true}}, '*') }
        })
    ],
    declarations:
    [

    ],
    exports:
    [
        MonacoEditorModule
    ]
})
export class CommonNgNgxCodeRootModule
{

}