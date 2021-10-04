import { Injectable } from '@angular/core'
// import { CommonStreamsService } from '../../../../libs/common/streams/streams.service.ng'
import { CommonNgJsonService } from '../json/json.service'
import { io } from 'socket.io-client'

@Injectable
({
    providedIn: 'root'
})
export class CommonNgWebsocketsService
{

    websockets: any = {}
    io = io

    constructor
    (
        // public streams: CommonStreamsService,
        public json: CommonNgJsonService
    )
    {

    }

    has
    (
        url: string
    )
    {
        return url in this.websockets
    }

    connect
    (
        url: string,
        options?: any,
        verbose?: boolean
    )
    {
        if (!this.has(url))
        {
            if (options && this.json.typeOf(options) === 'obj')
                this.websockets[url] = {socket: io(url, options), on: [], url: url, options: options}
            else
                this.websockets[url] = {socket: io(url), on: [], url: url}
        }
        else if (!this.websockets[url].socket.connect)
        {
            this.websockets[url].socket.reconnect()
        }
        else if (this.websockets[url].socket.connect)
        {
            this.websockets[url].socket.connect()
        }
        if (this.json.typeOf(options) === 'boo' || verbose)
            this.verbose(url)
        return this.websockets[url].socket
    }

    reconnectAll
    (
    )
    {
        this.json.keys(this.websockets).forEach((namespace : string) => {
            this.websockets[namespace].socket.disconnect()
            this.websockets[namespace].socket = io(this.websockets[namespace].url, this.websockets[namespace].options)
        })
    }

    disconnect
    (
        url: string
    )
    {
        if (this.has(url))
        {
            this.websockets[url].socket.disconnect()
            this.websockets[url].socket.removeAllListeners()
            
            // this.websockets[url].on.forEach((namespaceEvent : any) => {
            //     this.streams.unsubscribe('socket.io', namespaceEvent) 
            // })

            delete this.websockets[url]
        }
    }

    verbose
    (
        namespace: string
    )
    {
        this.once(namespace, 'connect', () => { console.log('connect', {namespace}) })
        this.on(namespace, 'disconnect', () => { console.log('disconnected', {namespace}) })
        this.on(namespace, 'exception', (data : any) => { console.log('exception', {namespace, ...data}) })
        this.on(namespace, 'connecting', (data : any) => { console.log('connecting', {namespace, ...data}) })
        this.on(namespace, 'reconnect', (data : any) => { console.log('reconnect', {namespace, ...data}) })
        this.on(namespace, 'reconnecting', (data : any) => { console.log('reconnecting', {namespace, ...data}) })
        this.on(namespace, 'connect_failed', (data : any) => { console.log('connect_failed', {namespace, ...data}) })
        this.on(namespace, 'reconnect_failed', (data : any) => { console.log('reconnect_failed', {namespace, ...data}) })
        this.on(namespace, 'close', (data : any) => { console.log('close', {namespace, data}) })
    }

    on
    (
        url: string,
        event: string,
        func: Function
    )
    {
        if (this.has(url))
        {
            // this.streams.subscribe('socket.io', url + '.' + event, $event => func($event), {keepAlive: true})
            // this.websockets[url].socket.on(event, (data : any) => { this.streams.dispatch('socket.io', url + '.' + event, data) })
            // this.websockets[url].on.push(url + '.' + event)
        }
    }

    once
    (
        url: string,
        event: string,
        func: Function
    )
    {
        // if (this.has(url))
        //     this.websockets[url].socket.once(event, (data : any) => { func(data) })
    }

    off
    (
        url: string,
        event: string,
        func?: Function
    )
    {
        if (this.has(url))
        {
            if (func)
            {
                this.websockets[url].socket.off(event, ($event : any) => func($event))
                // this.streams.unsubscribe('socket.io', url + '.' + event)
                this.json.remove(this.websockets[url].on, ($event : any) => func($event))

            }
            else
            {
                this.websockets[url].socket.off(event)
                // this.streams.unsubscribe('socket.io', url + '.' + event)
                this.websockets[url].on = []
            }
        }
    }

    emit
    (
        url: string,
        event: string,
        data?: any,
        func?: Function
    )
    {
        this.connect(url)
        func ? this.websockets[url].socket.emit(event, data, (data : any) => func(data)) : this.websockets[url].socket.emit(event, data)
    }

    emitRoom
    (
        url: string,
        event: string,
        room: string,
        data: any,
        func?: Function
    )
    {
        if (this.has(url))
            func ? this.websockets[url].socket.in(room).emit(event, data, (data : any) => func(data)) : this.websockets[url].socket.in(room).emit(event, data)
    }

}