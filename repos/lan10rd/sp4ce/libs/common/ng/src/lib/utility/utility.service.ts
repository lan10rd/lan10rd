import { Injectable } from '@angular/core'

import { CommonNgStreamsService } from '../streams/streams.service'
import { CommonNgRouterService } from '../router/router.service'
import { CommonNgCookieService } from '../cookie/cookie.service'
import { CommonNgHttpService } from '../http/http.service'
import { CommonNgJsonService } from '../json/json.service'
import { CommonNgDocumentService } from '../document/document.service'
import { CommonNgStylesService } from '../styles/styles.service'
import { CommonNgWindowService } from '../window/window.service'
import { CommonNgWebsocketsService } from '../websockets/websockets.service'
import { CommonNgSanitizerService  } from '../sanitizer/sanitizer.service'

@Injectable
({
    providedIn: 'root'
})
export class CommonNgUtilityService
{

    services : any = {}
    functions : any = {}
    data : any = {}

    constructor
    (
        public http : CommonNgHttpService,
        public router : CommonNgRouterService,
        public streams : CommonNgStreamsService,
        public cookie : CommonNgCookieService,
        public json : CommonNgJsonService,
        public document : CommonNgDocumentService,
        public styles : CommonNgStylesService,
        public window : CommonNgWindowService,
        public websockets : CommonNgWebsocketsService,
        public sanitizer : CommonNgSanitizerService
    )
    {
        this.setFunctions()
    }

    setFunctions
    (
    )
    {
        this.functions.print = (...args: any[]) => console.log(...args)
    }

}