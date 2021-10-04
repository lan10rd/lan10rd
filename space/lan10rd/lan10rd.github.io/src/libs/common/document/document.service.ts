import { Injectable, Inject } from '@angular/core'
import { DOCUMENT } from '@angular/common'
import { Meta, Title } from '@angular/platform-browser'
import { fromEvent } from 'rxjs'

import { CommonEventsService } from '../../../libs/common/events/events.service'
import { CommonStreamsService } from '../../../libs/common/streams/streams.service'

@Injectable
({
    providedIn: 'root'
})
export class CommonDocumentService
{

    constructor
    (
        public events: CommonEventsService,
        public streams: CommonStreamsService,
        @Inject(DOCUMENT) public document: Document,
        public meta: Meta,
        public title: Title
    )
    {
        this.initialize()
    }

    async initialize
    (
    )
    {
        fromEvent(this.document, 'abort').subscribe(this.streams.create('document', 'abort', {keepAlive: true}).subject)
        fromEvent(this.document, 'animationcancel').subscribe(this.streams.create('document', 'animationcancel', {keepAlive: true}).subject)
        fromEvent(this.document, 'animationend').subscribe(this.streams.create('document', 'animationend', {keepAlive: true}).subject)
        fromEvent(this.document, 'animationiteration').subscribe(this.streams.create('document', 'animationiteration', {keepAlive: true}).subject)
        fromEvent(this.document, 'animationstart').subscribe(this.streams.create('document', 'animationstart', {keepAlive: true}).subject)
        fromEvent(this.document, 'auxclick').subscribe(this.streams.create('document', 'auxclick', {keepAlive: true}).subject)
        fromEvent(this.document, 'blur').subscribe(this.streams.create('document', 'blur', {keepAlive: true}).subject)
        fromEvent(this.document, 'error').subscribe(this.streams.create('document', 'error', {keepAlive: true}).subject)
        fromEvent(this.document, 'focus').subscribe(this.streams.create('document', 'focus', {keepAlive: true}).subject)
        fromEvent(this.document, 'cancel').subscribe(this.streams.create('document', 'cancel', {keepAlive: true}).subject)
        fromEvent(this.document, 'canplay').subscribe(this.streams.create('document', 'canplay', {keepAlive: true}).subject)
        fromEvent(this.document, 'canplaythrough').subscribe(this.streams.create('document', 'canplaythrough', {keepAlive: true}).subject)
        fromEvent(this.document, 'change').subscribe(this.streams.create('document', 'change', {keepAlive: true}).subject)
        fromEvent(this.document, 'click').subscribe(this.streams.create('document', 'click', {keepAlive: true}).subject)
        fromEvent(this.document, 'close').subscribe(this.streams.create('document', 'close', {keepAlive: true}).subject)
        fromEvent(this.document, 'contextmenu').subscribe(this.streams.create('document', 'contextmenu', {keepAlive: true}).subject)
        fromEvent(this.document, 'cuechange').subscribe(this.streams.create('document', 'cuechange', {keepAlive: true}).subject)
        fromEvent(this.document, 'dblclick').subscribe(this.streams.create('document', 'dblclick', {keepAlive: true}).subject)
        fromEvent(this.document, 'drag').subscribe(this.streams.create('document', 'drag', {keepAlive: true}).subject)
        fromEvent(this.document, 'dragend').subscribe(this.streams.create('document', 'dragend', {keepAlive: true}).subject)
        fromEvent(this.document, 'dragenter').subscribe(this.streams.create('document', 'dragenter', {keepAlive: true}).subject)
        fromEvent(this.document, 'dragexit').subscribe(this.streams.create('document', 'dragexit', {keepAlive: true}).subject)
        fromEvent(this.document, 'dragleave').subscribe(this.streams.create('document', 'dragleave', {keepAlive: true}).subject)
        fromEvent(this.document, 'dragover').subscribe(this.streams.create('document', 'dragover', {keepAlive: true}).subject)
        fromEvent(this.document, 'dragstart').subscribe(this.streams.create('document', 'dragstart', {keepAlive: true}).subject)
        fromEvent(this.document, 'drop').subscribe(this.streams.create('document', 'drop', {keepAlive: true}).subject)
        fromEvent(this.document, 'durationchange').subscribe(this.streams.create('document', 'durationchange', {keepAlive: true}).subject)
        fromEvent(this.document, 'emptied').subscribe(this.streams.create('document', 'emptied', {keepAlive: true}).subject)
        fromEvent(this.document, 'ended').subscribe(this.streams.create('document', 'ended', {keepAlive: true}).subject)
        fromEvent(this.document, 'formdata').subscribe(this.streams.create('document', 'formdata', {keepAlive: true}).subject)
        fromEvent(this.document, 'gotpointercapture').subscribe(this.streams.create('document', 'gotpointercapture', {keepAlive: true}).subject)
        fromEvent(this.document, 'input').subscribe(this.streams.create('document', 'input', {keepAlive: true}).subject)
        fromEvent(this.document, 'invalid').subscribe(this.streams.create('document', 'invalid', {keepAlive: true}).subject)
        fromEvent(this.document, 'keydown').subscribe(this.streams.create('document', 'keydown', {keepAlive: true}).subject)
        fromEvent(this.document, 'keypress').subscribe(this.streams.create('document', 'keypress', {keepAlive: true}).subject)
        fromEvent(this.document, 'keyup').subscribe(this.streams.create('document', 'keyup', {keepAlive: true}).subject)
        fromEvent(this.document, 'load').subscribe(this.streams.create('document', 'load', {keepAlive: true}).subject)
        fromEvent(this.document, 'loadeddata').subscribe(this.streams.create('document', 'loadeddata', {keepAlive: true}).subject)
        fromEvent(this.document, 'loadedmetadata').subscribe(this.streams.create('document', 'loadedmetadata', {keepAlive: true}).subject)
        fromEvent(this.document, 'loadend').subscribe(this.streams.create('document', 'loadend', {keepAlive: true}).subject)
        fromEvent(this.document, 'loadstart').subscribe(this.streams.create('document', 'loadstart', {keepAlive: true}).subject)
        fromEvent(this.document, 'lostpointercapture').subscribe(this.streams.create('document', 'lostpointercapture', {keepAlive: true}).subject)
        fromEvent(this.document, 'mousedown').subscribe(this.streams.create('document', 'mousedown', {keepAlive: true}).subject)
        fromEvent(this.document, 'mouseenter').subscribe(this.streams.create('document', 'mouseenter', {keepAlive: true}).subject)
        fromEvent(this.document, 'mouseleave').subscribe(this.streams.create('document', 'mouseleave', {keepAlive: true}).subject)
        fromEvent(this.document, 'mousemove').subscribe(this.streams.create('document', 'mousemove', {keepAlive: true}).subject)
        fromEvent(this.document, 'mouseout').subscribe(this.streams.create('document', 'mouseout', {keepAlive: true}).subject)
        fromEvent(this.document, 'mouseover').subscribe(this.streams.create('document', 'mouseover', {keepAlive: true}).subject)
        fromEvent(this.document, 'mouseup').subscribe(this.streams.create('document', 'mouseup', {keepAlive: true}).subject)
        fromEvent(this.document, 'mousewheel').subscribe(this.streams.create('document', 'mousewheel', {keepAlive: true}).subject)
        fromEvent(this.document, 'wheel').subscribe(this.streams.create('document', 'wheel', {keepAlive: true}).subject)
        fromEvent(this.document, 'pause').subscribe(this.streams.create('document', 'pause', {keepAlive: true}).subject)
        fromEvent(this.document, 'play').subscribe(this.streams.create('document', 'play', {keepAlive: true}).subject)
        fromEvent(this.document, 'playing').subscribe(this.streams.create('document', 'playing', {keepAlive: true}).subject)
        fromEvent(this.document, 'pointerdown').subscribe(this.streams.create('document', 'pointerdown', {keepAlive: true}).subject)
        fromEvent(this.document, 'pointermove').subscribe(this.streams.create('document', 'pointermove', {keepAlive: true}).subject)
        fromEvent(this.document, 'pointerup').subscribe(this.streams.create('document', 'pointerup', {keepAlive: true}).subject)
        fromEvent(this.document, 'pointercancel').subscribe(this.streams.create('document', 'pointercancel', {keepAlive: true}).subject)
        fromEvent(this.document, 'pointerover').subscribe(this.streams.create('document', 'pointerover', {keepAlive: true}).subject)
        fromEvent(this.document, 'pointerout').subscribe(this.streams.create('document', 'pointerout', {keepAlive: true}).subject)
        fromEvent(this.document, 'pointerenter').subscribe(this.streams.create('document', 'pointerenter', {keepAlive: true}).subject)
        fromEvent(this.document, 'pointerleave').subscribe(this.streams.create('document', 'pointerleave', {keepAlive: true}).subject)
        fromEvent(this.document, 'lockchange').subscribe(this.streams.create('document', 'lockchange', {keepAlive: true}).subject)
        fromEvent(this.document, 'lockerror').subscribe(this.streams.create('document', 'lockerror', {keepAlive: true}).subject)
        fromEvent(this.document, 'progress').subscribe(this.streams.create('document', 'progress', {keepAlive: true}).subject)
        fromEvent(this.document, 'ratechange').subscribe(this.streams.create('document', 'ratechange', {keepAlive: true}).subject)
        fromEvent(this.document, 'reset').subscribe(this.streams.create('document', 'reset', {keepAlive: true}).subject)
        fromEvent(this.document, 'resize').subscribe(this.streams.create('document', 'resize', {keepAlive: true}).subject)
        fromEvent(this.document, 'scroll').subscribe(this.streams.create('document', 'scroll', {keepAlive: true}).subject)
        fromEvent(this.document, 'seeked').subscribe(this.streams.create('document', 'seeked', {keepAlive: true}).subject)
        fromEvent(this.document, 'seeking').subscribe(this.streams.create('document', 'seeking', {keepAlive: true}).subject)
        fromEvent(this.document, 'select').subscribe(this.streams.create('document', 'select', {keepAlive: true}).subject)
        fromEvent(this.document, 'selectstart').subscribe(this.streams.create('document', 'selectstart', {keepAlive: true}).subject)
        fromEvent(this.document, 'selectionchange').subscribe(this.streams.create('document', 'selectionchange', {keepAlive: true}).subject)
        fromEvent(this.document, 'show').subscribe(this.streams.create('document', 'show', {keepAlive: true}).subject)
        fromEvent(this.document, 'sort').subscribe(this.streams.create('document', 'sort', {keepAlive: true}).subject)
        fromEvent(this.document, 'stalled').subscribe(this.streams.create('document', 'stalled', {keepAlive: true}).subject)
        fromEvent(this.document, 'submit').subscribe(this.streams.create('document', 'submit', {keepAlive: true}).subject)
        fromEvent(this.document, 'suspend').subscribe(this.streams.create('document', 'suspend', {keepAlive: true}).subject)
        fromEvent(this.document, 'timeupdate').subscribe(this.streams.create('document', 'timeupdate', {keepAlive: true}).subject)
        fromEvent(this.document, 'volumechange').subscribe(this.streams.create('document', 'volumechange', {keepAlive: true}).subject)
        fromEvent(this.document, 'touchcancel').subscribe(this.streams.create('document', 'touchcancel', {keepAlive: true}).subject)
        fromEvent(this.document, 'touchend').subscribe(this.streams.create('document', 'touchend', {keepAlive: true}).subject)
        fromEvent(this.document, 'touchmove').subscribe(this.streams.create('document', 'touchmove', {keepAlive: true}).subject)
        fromEvent(this.document, 'touchstart').subscribe(this.streams.create('document', 'touchstart', {keepAlive: true}).subject)
        fromEvent(this.document, 'transitioncancel').subscribe(this.streams.create('document', 'transitioncancel', {keepAlive: true}).subject)
        fromEvent(this.document, 'transitionend').subscribe(this.streams.create('document', 'transitionend', {keepAlive: true}).subject)
        fromEvent(this.document, 'transitionrun').subscribe(this.streams.create('document', 'transitionrun', {keepAlive: true}).subject)
        fromEvent(this.document, 'transitionstart').subscribe(this.streams.create('document', 'transitionstart', {keepAlive: true}).subject)
        fromEvent(this.document, 'waiting').subscribe(this.streams.create('document', 'waiting', {keepAlive: true}).subject)
    }

    copy
    (
        text: string
    )
    {
        let el = document.createElement('textarea')
        el.value = text
        el.setAttribute('readonly', '')
        el.style.position = 'absolute'
        el.style.left = '-9999px'
        el.style.zIndex = '-12341234'
        document.body.appendChild(el)
        el.select()
        document.execCommand('copy')
        document.body.removeChild(el)
    }

    getSelectionText
    (
    )
    {
        let text = "";
        let activeEl = document.activeElement as any
        let activeElTagName = activeEl ? activeEl.tagName.toLowerCase() : null
        if
        (
            (activeElTagName == 'textarea') || (activeElTagName === 'input' &&
            /^(?:text|search|password|tel|url)$/i.test(activeEl.type)) &&
            (typeof activeEl.selectionStart == "number")
        )
            text = activeEl.value.slice(activeEl.selectionStart, activeEl.selectionEnd)
        else if (window.getSelection)
            text = window.getSelection().toString()
        return text
    }

    async loadScript
    (
        src: string,
        id: string,
        options?: any
    )
    {
        return new Promise((resolve, reject) => {
            let script = this.document.createElement('script')
            script.type = 'text/javascript'
            script.src = src
            script.id = id
            if (options)
            {
                if ('attributes' in options)
                {
                    for (let attributeKey of Object.keys(options.attributes))
                        script.setAttribute(attributeKey, options.attributes[attributeKey])
                }
            }
            this.document.head.append(script)
            script.addEventListener('load', () => { return resolve(script) })
            script.addEventListener('error', () => { return reject(src) })
        })
    }

    createScript
    (
        script: string,
        id: string
    )
    {
        let scriptElement = this.document.createElement('script')
        scriptElement.append(this.document.createTextNode(script))
        scriptElement.id = id
        this.document.body.append(scriptElement)
    }

    fetch
    (
        elementId: string
    )
    {
        return this.document.getElementById(elementId)
    }

    destroy
    (
        elementId: string
    )
    {
        let element = this.fetch(elementId)
        element.parentNode.removeChild(element)
    }

    addMeta
    (
        meta: any
    )
    { 
        this.meta.addTag(meta)
        // let link = document.createElement('meta')
        // link.setAttribute('property', 'og:url')
        // link.content = meta.content
        // this.document.getElementsByTagName('head')[0].appendChild(link)
    }

}