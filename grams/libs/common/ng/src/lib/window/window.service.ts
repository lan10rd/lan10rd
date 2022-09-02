import { Injectable } from '@angular/core'

@Injectable
({
    providedIn: 'root'
})
export class CommonNgWindowService
{

    constructor
    (
    )
    {

    }

    isOnline
    (
    )
    {
        return window.navigator.onLine
    }

    onlineSetup
    (
    )
    {
        // window.addEventListener('online', () => console.log('Became online'));
        // window.addEventListener('offline', () => console.log('Became offline'));
    }

    updatePath
    (
        params : any
    )
    {
        let paramsString = params.toString()
        let newRelativePathQuery = window.location.pathname + (paramsString.trim().length > 0 ? '?' + params.toString() + window.location.hash : '')
        history.pushState(null, '', newRelativePathQuery)
    }

    getParam
    (
        key : string
    )
    {
        return this.getParams().get(key)
    }

    getParams
    (
    )
    {
        return new URLSearchParams(window.location.search)
    }

    deleteParams(keys : string[])
    {
        let params = this.getParams()
        for (let key of keys)
            params.delete(key)
        this.updatePath(params)
    }

    deleteParam
    (
        key : string
    )
    {
        let params = this.getParams()
        params.delete(key)
        this.updatePath(params)
    }

    setParam
    (
        key : string,
        value : string,
        reload ?: boolean
    )
    {
        let params = this.getParams()
        params.set(key, value)
        if (reload)
            window.location.search = params.toString()
        this.updatePath(params)
    }

    setParams
    (
        key : string,
        value : string,
        reload ?: boolean
    )
    {
        let params = this.getParams()
        params.set(key, value)
        if (reload)
            window.location.search = params.toString()
        this.updatePath(params)
    }

    open
    (
        url : string,
        name : string,
        features : {
            left ?: number,
            screenX ?: number,
            top ?: number,
            screenY ?: number,
            width ?: number,
            innerWidth ?: number,
            height ?: number,
            innerHeight ?: number,
            menubar ?: 'yes' | 'no' | 1 | 0,
            toolbar ?: 'yes' | 'no' | 1 | 0,
            location ?: 'yes' | 'no' | 1 | 0,
            resizable ?: 'yes' | 'no' | 1 | 0,
            scrollbars ?: 'yes' | 'no' | 1 | 0,
            noopener ?: 'yes' | 'no' | 1 | 0,
            noreferrer ?: 'yes' | 'no' | 1 | 0,
        } = {}
    )
    {
        let featuresString = ''
        let keys = Object.keys(features)
        let anyFeatures = <any>features
        for (let i = 0; i < keys.length; i++)
        {
            let key = keys[i]
            featuresString += key + '=' + anyFeatures[key] + (i < keys.length - 1 ? ',' : '')
        }
        return window.open(url, name, featuresString)
    }

    close
    (
        win : any
    )
    {
        win.close()
    }

    opener
    (
    )
    {
        return window.opener
    }

    parent
    (
    )
    {
        return window.parent
    }

    iframe
    (
        frame : HTMLIFrameElement
    )
    {
        return frame.contentWindow
    }

    frames
    (
        index : number
    )
    {
        return window.frames[index]
    }

    postMessage
    (
        message : any,
        targetOrigin = '*',
        win ?: any
    )
    {
        if (!win)
            win = window
        win.postMessage(message, targetOrigin)
    }

    listen
    (
        fun : Function,
        origin : string = '*'
    )
    {
        return window.addEventListener("message", (event) => {
            if (event.origin !== origin)
              return
            fun(event)
        }, false);
    }

    listenReply
    (
        fun : Function,
        origin : string = '*'
    )
    {
        // event.source.postMessage("hi there yourself!  the secret response " +
        // "is: rheeeeet!",
        // event.origin);
    }

}