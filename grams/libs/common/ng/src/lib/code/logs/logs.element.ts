import { Component, Input, ChangeDetectionStrategy } from '@angular/core'

import { CommonNgCodeLogsService } from './logs.service'


@Component
({
    selector : 'common-ng-code-logs-element',
    template :
`
<pre class="container" [innerHTML]="_logs"></pre>
`,
    styles :
[`

`],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommonNgCodeLogsElement
{

    @Input() logs : string = ''
    _logs : any = ''

    @Input() options : any = {
        fg: '#FFF',
        bg: '#000',
        newline: false,
        escapeXML: false,
        stream: false
    }

    constructor
    (
        public logsService: CommonNgCodeLogsService
    )
    {

    }

    ngOnChanges
    (
        changes : any
    )
    {
        this._logs = this.logsService.convert(this.logs)
    }

}