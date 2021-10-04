import { Component, Input, Output, EventEmitter } from '@angular/core'

import { CommonNgNgxCodeService } from '../code.service'

@Component
({
    selector : 'common-ng-ngx-code-editor-element',
    templateUrl : './editor.element.html',
    styleUrls : ['./editor.element.scss']
})
export class CommonNgNgxCodeEditorElement
{

    @Input() model : any
    @Output() modelChange : any = new EventEmitter()
    @Input() fileName : any
    @Input() options : any = {
        language: 'typescript',
        wordWrap: 'on',
        // automaticLayout ?
    }

    constructor(public code: CommonNgNgxCodeService) {}

    ngOnInit
    (
    )
    {
        if (this.fileName)
            this.options.language = this.code.language(this.fileName)
    }

}