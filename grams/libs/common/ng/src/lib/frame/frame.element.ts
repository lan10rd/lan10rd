import { Component, ViewChild, Input, ViewEncapsulation } from '@angular/core'

import { CommonNgHttpService } from '../http/http.service'

@Component
({
    selector: 'common-ng-frame-element',
    templateUrl: './frame.element.html',
    styleUrls: ['./frame.element.scss'],
    encapsulation: ViewEncapsulation.None
})
export class CommonNgFrameElement
{

    @Input() src: any
    @Input() snippet: any

    @ViewChild('frame') frame: any

    constructor
    (
        public http: CommonNgHttpService
    )
    {

    }

    async ngAfterViewInit
    (
    )
    {
        let snippet = this.src ? await this.http.get(this.src, {responseType: 'text'}) : this.snippet
        this.write(snippet)
    }
    

    write
    (
        content: string
    )
    {
        this.frame.nativeElement.contentDocument.write(content)
        this.frame.nativeElement.contentDocument.close()
    }

}