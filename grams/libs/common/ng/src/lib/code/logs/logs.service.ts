import { Injectable } from '@angular/core'

import { CommonNgSanitizerService } from '../../sanitizer/sanitizer.service'

// import Convert from 'ansi-to-html'
import { Convert } from './helper/convert'

@Injectable({ providedIn : 'root'})
export class CommonNgCodeLogsService
{

    converter : any
    
    constructor
    (
        public sanitizer: CommonNgSanitizerService
    )
    {
        this.converter = new Convert()
    }

    convert
    (
        ansi : string,
        options : any = {
            fg: '#FFF',
            bg: '#000',
            newline: false,
            escapeXML: false,
            stream: false
        }
    )
    {
        return this.sanitizer.bypassSecurityTrustHtml(this.converter.toHtml(ansi, options))
    }

}