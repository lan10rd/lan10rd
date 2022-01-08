import { Component, Input } from '@angular/core'

import { CommonNgNgxCodeService } from '../code.service'

@Component
({
    selector : 'common-ng-ngx-code-diff-element',
    templateUrl : './diff.element.html',
    styleUrls : ['./diff.element.scss']
})
export class CommonNgNgxCodeDiffElement
{

    @Input() original : any
    @Input() modified : any
    @Input() options : any = {
        wordWrap : 'on',
        language : 'text/plain'
    }
    @Input() fileName : any

    models : any

    constructor(public code: CommonNgNgxCodeService) {}

    ngOnInit
    (
    )
    {
        if (this.fileName)
            this.options.language = this.code.language(this.fileName)
        this.models = {
            original : { code: this.original },
            modified : { code: this.modified }
        }
    }

}