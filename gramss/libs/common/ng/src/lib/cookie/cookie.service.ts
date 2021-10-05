import { Injectable, Inject } from '@angular/core'

import { CommonNgDocumentService } from '../document/document.service'

@Injectable
({
    providedIn: 'root'
})
export class CommonNgCookieService
{

    constructor
    (
        public document: CommonNgDocumentService
    )
    {

    }

    
    get
    (
        name: any
    )
    {
        let matches = this.document.document.cookie.match(new RegExp(
          "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ))
        return matches ? decodeURIComponent(matches[1]) : undefined
    }

    set
    (
        name: string,
        value: any,
        options: any = {}
    )
    {
        options = {
            path: '/',
            ...options
        }
      
        if (options.expires instanceof Date)
            options.expires = options.expires.toUTCString()
      
        let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
      
        for (let optionKey in options)
        {
            updatedCookie += "; " + optionKey
            let optionValue = options[optionKey]
            if (optionValue !== null) // used to be true, but i feel like you may want option=true;
                updatedCookie += "=" + optionValue              
        }

        this.document.document.cookie = updatedCookie
    }


}