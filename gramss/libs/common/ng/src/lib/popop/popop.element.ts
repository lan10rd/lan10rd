import { Component, ViewChild } from '@angular/core'

import { CommonNgPopopService } from './popop.service'
import { CommonNgJsonService } from '../json/json.service'

@Component
({
    selector: 'common-ng-popop-element',
    templateUrl: './popop.element.html',
    styleUrls: ['./popop.element.scss']
})
export class CommonNgPopopElement
{

    @ViewChild('popopContent', {static: false}) popopContent: any
    @ViewChild('modal', {static: false}) modal: any

    mousedownPath: any = []
    mousedown_event: any

    constructor
    (
        public srv: CommonNgPopopService,
        public json: CommonNgJsonService
    )
    {

    }

    ngOnInit
    (
    )
    {

    }

    ngAfterViewChecked
    (
    )
    {
        if (this.popopContent)
        {
            // this.modal.nativeElement.focus()
            for (let kv of this.json.entries(this.srv.listeners))
            {
                if (!kv[1].listening && this.popopContent.compRef)
                {
                    this.popopContent.compRef.instance[kv[0]].subscribe(($event: Event) => kv[1].fun($event))
                    kv[1].listening = true
                }
            }
            this.srv.modal = this.modal
        }
    }

    mousedown
    (
        $event: any
    )
    {
        this.mousedown_event = $event
        /*
            this.mousedownPath = $event.path
        */
    }

    mouseup
    (
        $event: any
    )
    {
        if (this.mousedown_event?.target === $event.target)
            this.srv.close()
        /*
        let popopI = -7, containerI = -7
        for (let p = this.mousedownPath.length; p >= 0; p--)
        {
            if (this.mousedownPath[p] && this.mousedownPath[p].classList)
            {
                for (let c of this.mousedownPath[p].classList)
                {
                    if (c === 'common-popop-element-container')
                        containerI = p
                    else if (c === 'common-popop-element-modal')
                        popopI = p
                }
            }
        }
        if (popopI === -7 && containerI !== -7)
            this.srv.close()
        this.mousedownPath = []
        */
    }

}