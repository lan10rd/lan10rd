import { Component, ViewChild, Input, ChangeDetectionStrategy
    // ViewEncapsulation 
} from '@angular/core'

import { CommonNgHttpService } from '../http/http.service'

@Component
({
    selector: 'common-ng-frame-element',
    templateUrl: './frame.element.html',
    styleUrls: ['./frame.element.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
    // encapsulation: ViewEncapsulation.None
})
export class CommonNgFrameElement
{

    @Input() src: any
    @Input() snippet: any

    @ViewChild('frame') frame: any

    init: boolean = false

    constructor
    (
        public http: CommonNgHttpService
    )
    {

    }

    async ngOnChanges
    (
        changes: any
    )
    {
        if (this.init && changes?.snippet)
        {
            this.write(this.snippet)
        }
    }

    async ngAfterViewInit
    (
    )
    {
        let snippet = this.src ? await this.http.get(this.src, {responseType: 'text'}) : this.snippet
        this.write(snippet)
        this.init = true
    }
    

    write
    (
        content: string
    )
    {
        this.frame.nativeElement.contentDocument.open()
        this.frame.nativeElement.contentDocument.write(content)
        this.frame.nativeElement.contentDocument.close()
    }

}