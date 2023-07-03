import { Injectable } from '@angular/core'

@Injectable
({
    providedIn: 'root'
})
export class CommonNgEventsService
{

    create
    (
        name: string,
        detail?: any,
        bubbles?: boolean
    )
    {
        if (detail)
            return bubbles ? new CustomEvent(name, {detail, bubbles: true}) : new CustomEvent(name, {detail})
        return new CustomEvent(name)
    }

    listen
    (
        element: HTMLElement,
        event: string,
        fun: any,
        eventCapture?: boolean
    )
    {
        element.addEventListener(event, fun, eventCapture)
    }

    unlisten
    (
        element: HTMLElement,
        event: string,
        fun: any,
        eventCapture?: boolean
    )
    {
        element.removeEventListener(event, fun, eventCapture)
    }

    dispatch
    (
        element: HTMLElement,
        event: Event
    )
    {
        element.dispatchEvent(event)
    }

    stopPropagation
    (
        $event: Event
    )
    {
        $event.stopPropagation()
    }

    preventDefault
    (
        $event: Event
    )
    {
        $event.preventDefault()
    }

}