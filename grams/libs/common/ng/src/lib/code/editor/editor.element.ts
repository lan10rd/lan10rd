import { Component, Input, Output, EventEmitter, ViewChild, ChangeDetectionStrategy } from '@angular/core'
import { fromEvent } from 'rxjs'

import { CommonNgCodeService } from '../code.service'

@Component
({
    selector : 'common-ng-code-editor-element',
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
`],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommonNgCodeEditorElement
{

    @Input() model : any
    @Output() modelChange : any = new EventEmitter()
    @Input() options : any = {
        language: 'typescript',
        wordWrap: 'on',
        // automaticLayout ?
    }
    @Input() fileName : any
    @ViewChild('container') container : any

    editor : any
    windowResize$ : any

    constructor(public code: CommonNgCodeService){}

    ngOnInit
    (
    )
    {
        if (this.fileName)
            this.options.language = this.code.language(this.fileName)
    }

    ngOnChanges
    (
        changes : any
    )
    {
        try
        {
            // if ('model' in changes && this.editor && changes.model.currentValue && changes.model.currentValue !== this.editor.getValue())
            if ('model' in changes && this.editor && changes.model.currentValue !== this.editor.getValue())
                this.editor.setValue(changes.model.currentValue)
        }
        catch(e)
        {
            console.log('ngOnChanges code editor element', e, changes)
        }
    }

    async ngAfterViewInit
    (
    )
    {
        await this.code.load(this.options)
        this.editor = this.code.createEditor(this.container.nativeElement, this.model, this.options)
        this.editor.onDidChangeModelContent(($event : any) => {
            this.model = this.editor.getValue()
            this.modelChange.emit(this.model)
        })
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