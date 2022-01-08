import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { take } from 'rxjs/operators'
import { fromEvent, Subscription } from 'rxjs';
import { filter, distinctUntilChanged } from 'rxjs/operators';

import { CommonNgStreamsService } from '../streams/streams.service'
import { CommonNgDocumentService } from '../document/document.service'
import { CommonNgJsonService } from '../json/json.service'

@Injectable
({
    providedIn: 'root'
})
export class CommonNgPopopService
{

    public show: boolean = false
    public component: any
    public module: any
    public data: any
    public listeners: any = {}

    public esc_subscription: any
    public last_focus_element: any
    public modal: any

    public data_mode: 'copy' | 'reference' = 'copy'

    constructor
    (
        public streams: CommonNgStreamsService,
        public doc: CommonNgDocumentService,
        public json: CommonNgJsonService
    )
    {
        this.init()
    }

    init
    (
    )
    {
        const key_ups = fromEvent(document, 'keyup').pipe
            (
                // filter((evt: any) => {
                //     let isEscape : boolean = false
                //     if ("key" in evt)
                //         isEscape = (evt.key === "Escape" || evt.key === "Esc");
                //     else
                //         isEscape = (evt.keyCode === 27);
                //     return evt.keyCode === 27
                // }),
                distinctUntilChanged()
            )
        this.esc_subscription = key_ups.subscribe((evt: any) => {
            let is_escape : boolean = false
            if ("key" in evt)
                is_escape = (evt.key === "Escape" || evt.key === "Esc")
            else
                is_escape = (evt.keyCode === 27)
            if (is_escape) {
                if (this.show)
                    this.close()
            }
            else if (evt.keyCode === 9 && this.show && this.modal)
            {
                // evt.stopPropagation() // doesnt seem to do anything
                // evt.preventDefault()
                let focusable : any = this.modal.nativeElement?.querySelectorAll('input,button,select,textarea')
                if (focusable?.length > 0)
                {
                    let first = focusable[0]
                    let last = focusable[focusable.length - 1]
                    let shift = evt.shiftKey
                    let find : any
                    for (let f of focusable)
                        if (f === evt.target)
                        {
                            find = f
                            break
                        }
                    if (!find)
                    {
                        if (shift)
                            last.focus()
                        else
                            first.focus()
                    }
                }
            }
        })
    }

    open
    (
        component: any,
        module: any,
        data?: any
    ): Observable<{component : any, module : any, data : any, status ?: any}>
    {
        this.last_focus_element = this.doc.document.activeElement

        this.data = this.data_mode === 'copy' ? this.json.copy(data) : data
        this.component = component
        this.module = module
        this.show = true
        document.body.style.overflow = 'hidden'
        this.streams.dispatch('CommonNgPopopService.open', {component, module, data})
        return this.streams.fetch('CommonNgPopopService.close').pipe(take(1))
    }

    update
    (
        component: any,
        module: any,
        data?: any
    )
    {
        this.data = data
        this.component = component
        this.module = module
        this.listeners = {}
        this.streams.dispatch('CommonNgPopopService.open', {component, module, data})
    }

    close
    (
        status?: any
    )
    {
        this.show = false
        this.listeners = {}
        document.body.style.overflow = 'auto'
        this.streams.dispatch('CommonNgPopopService.close', {component: this.component, module: this.module, data: this.data, status})
        this.last_focus_element = this.doc.document.activeElement
        this.last_focus_element.focus()
    }

    listen
    (
        output: string,
        fun: Function
    )
    {
        this.listeners[output] = {fun, listening: false}
    }

}