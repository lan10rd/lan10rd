import { Component, Input, ViewChild } from '@angular/core'
import { fromEvent } from 'rxjs'

import { CommonNgCodeService } from '../code.service'

@Component
({
    selector : 'common-ng-code-diff-element',
    template :
`
<ng-container
*ngIf="editable"
>
    <textarea
    #originalText
    [(ngModel)]="original"
    (ngModelChange)="setup(original, modified, true)"
    ></textarea>
    <textarea
    [(ngModel)]="modified"
    #modifiedText
    (ngModelChange)="setup(original, modified, true)"
    ></textarea>
</ng-container>
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
    @Input() editable: boolean = false

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
        this.setup(this.original, this.modified)
        this.windowResize$ = fromEvent(window, 'resize').subscribe(() => this.editor.layout())
    }

    async ngOnChanges
    (
    )
    {
        this.setup(this.original, this.modified)
    }

    async setup
    (
        original: any,
        modified: any,
        clear?: boolean
    )
    {
        if (clear)
            this.container.nativeElement.innerHTML = ''
        await this.code.load(this.options)
        this.editor = this.code.createDiff(this.container.nativeElement, original, modified, this.options)
        
        if (this.editable)
            this.editor.onDidUpdateDiff(($event: any) => {
                this.modified = this.editor.getModifiedEditor().getValue()
            })
    }

    async ngOnDestroy
    (
    )
    {
        if (this.windowResize$)
            this.windowResize$.unsubscribe()
    }

}