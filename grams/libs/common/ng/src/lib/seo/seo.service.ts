import { Injectable } from '@angular/core'
import { Meta, Title } from '@angular/platform-browser'

@Injectable
({
   providedIn: 'root'
})
export class CommonNgSeoService
{ 

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
        console.log('meta', this.meta)
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
        else
            this.title.setTitle('')

        for (let tag of tags)
        {
            this.removeNamedTag(tag.name)
            this.meta.addTag(tag)
        }

        // if (this.meta.getTag('description'))
        // if (!this.added)
        // {
        //     this.meta.addTags(tags)
        //     this.added = true
        // }
        // else
        // {
        //     tags.forEach(tag => { this.meta.updateTag(tag) })
        //     if (!keywords || keywords.length === 0) this.removeNamedTag('keywords')
        //     if (!description) this.removeNamedTag('description')
        //     if (!route) this.meta.removeTag('http')
        // }
    }

    removeNamedTag
    (
        name: string
    )
    {
        this.meta.removeTag(`name = "${name}"`)
    }

} 