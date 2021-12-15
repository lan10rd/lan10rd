import { Injectable, Inject } from '@angular/core'
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http'
// import { CommonNgCookieService } from '@grams/common/ng'
import { CommonNgUtilityService, CommonNgThemesService, CommonNgPopopService } from '@grams/common/ng'

@Injectable
({
    providedIn: 'root'
})
export class AppInitService
{

    _xsrf: any

    constructor
    (
        @Inject('API') public api: string,
        public util: CommonNgUtilityService,
        public themes : CommonNgThemesService,
        public popop : CommonNgPopopService,
    )
    {
        console.log("here")
    }

    async initialize
    (
    )
    {
        // this.xsrf()
        this.util.router.router.resetConfig((await import('../app.routes')).routes)
        this.util.services.themes = this.themes
        this.util.services.popop = this.popop
        this.util.streams.change('api', this.api)
        this.util.data.config = {
            locations: {
                ASSETS_SRC: 'https://github.com/lan10rd/lan10rd/tree/main/repos/lan10rd/lan10rd.github.io/src/assets',
                ASSETS: 'https://raw.githubusercontent.com/lan10rd/lan10rd/main/repos/lan10rd/lan10rd.github.io/src/assets/'
            }
        }
        this.util.functions.assets = (suffix: string) => this.util.data.config.locations.ASSETS + suffix

        // this.util.services.code.setTheme(this.util.services.code.themes.celeste.name, this.util.services.code.themes.celeste.options)
        // this.util.services.themes.modifyTheme
        // ({
        //     addStyles: {
        //         body: {
        //             'background-image': 'url(https://raw.githubusercontent.com/lan10rd/lan10rd/main/repos/lan10rd/lan10rd.github.io/src/assets/photos/cute-lions.jpg)'
        //         }
        //     }
        // })
    }

    async xsrf
    (
    )
    {
        try
        {
            this._xsrf = await this.util.http.get(this.api + '/common/http/xsrf', {withCredentials: true, responseType: 'text'})
        }
        catch(e)
        {
            console.log('AppInitService.xsrf e', e)
        }
        // this.cookie.set('XSRF-TOKEN', this._xsrf)
    }

}