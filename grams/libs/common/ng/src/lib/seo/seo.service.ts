import { Injectable } from '@angular/core'
import { Meta, Title } from '@angular/platform-browser'

@Injectable
({
   providedIn: 'root'
})
export class CommonNgSeoService
{ 

    added = false

    constructor
    (
        public meta: Meta,
        public title: Title
    )
    {

    }

    bind
    (
        route: string,
        title: string,
        description: string,
        keywords: string,
        tags?: any[]
    )
    {
        if (!tags)
        {
            tags = [{name: 'robots', content: 'index, follow'}]
            if (keywords)
                tags.push({name: 'keywords', content: keywords})
            if (description)
                tags.push({name: 'description', content: description})
            if (route)
                tags.push({name: 'http', httpEquiv: route})
        }
        if (title)
            this.title.setTitle(title)
        if (!this.added)
        {
            this.meta.addTags(tags)
            this.added = true
        }
        else
        {
            tags.forEach(tag => { this.meta.updateTag(tag) })
            if (!keywords || keywords.length === 0) this.removeNamedTag('keywords')
            if (!description || description.length === 0) this.removeNamedTag('description')
            if (!route) this.meta.removeTag('http')
        }
    }

    removeNamedTag
    (
        name: string
    )
    {
        this.meta.removeTag(`name = "${name}"`)
    }

} 