import { Component, Input, ViewChild } from '@angular/core'
import { fromEvent } from 'rxjs'

import { CommonNgCodeService } from '../code.service'

@Component
({
    selector : 'common-ng-code-diff-element',
    template :
`
<div class="container" #container></div>
`,
    styles :
[`
:host {
    display: block;
    height: 100px;
}
.container {
    width: 100%;
    height: 100%;
}
`]
})
export class CommonNgCodeDiffElement
{

    @Input() original : any
    @Input() modified : any
    @Input() options : any = {
        language: 'typescript',
        wordWrap: 'on'
    }
    @Input() fileName : any
    @ViewChild('container') container : any

    editor : any
    windowResize$ : any

    constructor
    (
        public code : CommonNgCodeService
    )
    {

    }

    ngOnInit
    (
    )
    {
        if (this.fileName)
            this.options.language = this.code.language(this.fileName)
    }

    async ngAfterViewInit
    (
    )
    {
        await this.code.load(this.options)
        this.editor = this.code.createDiff(this.container.nativeElement, this.original, this.modified, this.options)
        this.windowResize$ = fromEvent(window, 'resize').subscribe(() => this.editor.layout())
    }

    async ngOnDestroy
    (
    )
    {
        if (this.windowResize$)
            this.windowResize$.unsubscribe()
    }

}