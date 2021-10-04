import { Injectable, NgZone } from '@angular/core'
import { Observable, Subject, of, Subscription, Subscriber, fromEvent } from 'rxjs'
import { webSocket, WebSocketSubject } from 'rxjs/webSocket'

import { CommonEventsService } from '../events/events.service'

@Injectable
({
    providedIn: 'root'
})
export class CommonStreamsService
{

    streams: any = {}

    constructor
    (
        public zone: NgZone
    )
    {

    }

    key
    (
        stream: string,
        action: string
    )
    {
        return '[' + stream + '] ' + action
    }

    exists
    (
        stream: string,
        action: string
    )
    {
        return this.key(stream, action) in this.streams
    }

    create
    (
        stream: string,
        action: string,
        options?: any
    )
    { 
        if (!this.exists(stream, action))
        {
            this.streams[this.key(stream, action)] = {
                subject: new Subject<any>(),
                options: options
            }
            return this.fetch(stream, action)
        }
    }

    fetch
    (
        stream: string,
        action: string
    )
    {
        return this.streams[this.key(stream, action)]
    }

    observe
    (
        stream: string,
        action: string
    )
    {
        return this.fetch(stream, action).subject
    }

    subscribe
    (
        stream: string,
        action: string,
        fun,
        options?: any,
        retry?: boolean
    )
    {
        try
        {
            return this.streams[this.key(stream, action)].subject.subscribe(fun)
        }
        catch(e)
        {
            if (!retry && !this.exists(stream, action))
            {
                this.create(stream, action, options)
                return this.subscribe(stream, action, fun, options, true)
            }
        }
    }

    unsubscribe
    (
        stream,
        action
    )
    {
        let toClean = []
        if (this.exists(stream, action))
            toClean.push(this.key(stream, action))
        Object.keys(this.streams).forEach(key => {
            let stream = this.streams[key]
            if
            (
                (!stream.options || !(stream.options.keepAlive)) &&
                stream.subject && 
                stream.subject.observers.length === 0
            )
                toClean.push(key)
        })
        toClean.forEach(key => { 
            this.streams[key].subject.complete()
            this.streams[key].subject.unsubscribe()
            delete this.streams[key]
        })
    }

    dispatch
    (
        stream: string,
        action: string,
        data?: any,
        options?: any,
        retry?: boolean
    )
    {
        try
        {
            this.zone.run(() => this.streams[this.key(stream, action)].subject.next(data))
        }
        catch(e)
        {
            if (!retry && !this.exists(stream, action))
            {
                this.create(stream, action, options)
                this.dispatch(stream, action, data, options, true)
            }
        }
    }

    // websockets: any = {}

    // createWebsocket
    // (
    //     url: string
    // )
    // {
    //     if (!(url in this.websockets))
    //         this.websockets[url] = webSocket({
    //             url: url,
    //             deserializer: msg => msg,
    //             serializer: msg => msg + ''
    //         })
    //     return this.websockets[url]
    // }

    // subscribeWebsocket
    // (
    //     url: string,
    //     channel: string,
    //     fun
    // )
    // {
    //     this.websockets[url].multiplex(
    //         () => ({subscribe: channel}),
    //         () => ({unsubscribe: channel}),
    //         message => message.type === channel
    //     ).subscribe(fun)
    // }

}