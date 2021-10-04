import { Injectable } from '@angular/core'
import { CommonDocumentService } from '../document/document.service'

@Injectable
({
    providedIn: 'root'
})
export class CommonStylesService
{

    constructor
    (
        public document: CommonDocumentService
    )
    {
        
    }

    getStyles
    (
        element: HTMLElement
    )
    {
        let styles = {}
        let styleAttribute = element.outerHTML.split('<' + element.tagName.toLowerCase())[1].split('>')[0].split('style=\"')
        if (styleAttribute.length > 1)
        {
            styleAttribute[1].substring(0, styleAttribute[1].length - 1).split('; ').forEach(split => {
                if (split.trim().length > 0)
                {
                    let index = split.indexOf(':')
                    styles[split.substring(0, index)] = split.substring(index + 1, split.length).trim().split('&quot;').join('"')
                }
            })
        }
        return styles as any
    }

    setStyles
    (
        element: HTMLElement,
        styles: any
    )
    {
        let inlineStyles = ''
        Object.keys(styles).forEach(key => { inlineStyles += key + ': ' + styles[key] + '; ' })
        element.setAttribute('style', inlineStyles)
    }

    applyStyles
    (
        element: HTMLElement,
        styles: any
    )
    {
        let currentStyles = this.getStyles(element)
        Object.keys(styles).forEach(style => { currentStyles[style] = styles[style] })
        this.setStyles(element, currentStyles)
    }

    clearStyles
    (
        element: HTMLElement
    )
    {
        this.setStyles(element, {})
    }

    getGlobal
    (
        id: string
    )
    {
        return this.document.document.getElementById(id)
    }

    setGlobal
    (
        id: string,
        styles: string
    )
    {
        this.getGlobal(id).innerText = styles
    }

    async addGlobal
    (
        styles: string,
        id: string
    )
    {
        let style = this.document.document.createElement('style')
        style.innerHTML = styles
        style.id = id
        this.document.document.head.appendChild(style)
    }

    async removeGlobal
    (
        id: string
    )
    {
        try
        {
            let element = this.document.document.getElementById(id)
            if (element)
                element.parentNode.removeChild(element)
        }
        catch(e)
        {
            console.log('CommonStylesService.removeGlobal e', e)
        }
    }

    async resetGlobal
    (
        styles: string,
        id: string
    )
    {
        this.removeGlobal(id)
        this.addGlobal(styles, id)
    }

    addClass
    (
        element: HTMLElement,
        ass: string
    )
    {
        element.classList.add(ass)
    }

    addClasses
    (
        element: HTMLElement,
        asses: string[]
    )
    {
        for(let ass of asses)
            this.addClass(element, ass)
    }

    removeClass
    (
        element: HTMLElement,
        ass: string
    )
    {
        element.classList.remove(ass)
    }

    removeClasses
    (
        element: HTMLElement,
        asses: string
    )
    {
        for(let ass of asses)
            this.removeClass(element, ass)
    }

    getCalculated
    (
        element: HTMLElement
    )
    {
        return window.getComputedStyle(element)
    }

    async earth
    (
    )
    {
        this.removeGlobal
        (
            'EarthStyles'
        )
        this.addGlobal
        (
            `
            @import url("https://styles.glass.earth/animate-mini.css");
            @import url("https://styles.glass.earth/fonts-mini.css");
            @import url("https://styles.glass.earth/earth-mini.css");
            @import url("https://assets.glass.earth/fontello/css/fontello-mini.css");
            @import url("https://assets.glass.earth/fontello/css/animation-mini.css");
            `,
            'EarthStyles'
        )
    }

    body
    (
    )
    {
        return this.getCalculated(this.document.document.body)
    }

    doc
    (
    )
    {
        return this.getCalculated(this.document.document.documentElement)
    }

}