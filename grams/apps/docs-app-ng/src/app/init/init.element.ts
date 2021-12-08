import { Component, Inject } from '@angular/core'

import { CommonNgUtilityService, CommonNgThemesService, CommonNgPopopService
 } from '@grams/common/ng'

@Component
({
    selector : 'app-init-element',
    templateUrl : './init.element.html',
    styleUrls : ['./init.element.scss']
})
export class AppInitElement
{

    constructor
    (
        public util : CommonNgUtilityService,
        public themes : CommonNgThemesService,
        public popop : CommonNgPopopService,
        @Inject('API') public api: string
    )
    {
        util.services.themes = themes
        util.services.popop = popop
        util.streams.change('api', api)
    }

    ngOnInit
    (
    )
    {
        this.util.data.config = {
            locations: {
                ASSETS_SRC: 'https://github.com/lan10rd/lan10rd/tree/main/repos/lan10rd/lan10rd.github.io/src/assets',
                ASSETS: 'https://raw.githubusercontent.com/lan10rd/lan10rd/main/repos/lan10rd/lan10rd.github.io/src/assets/'
            }
        }
        this.util.functions.assets = (suffix: string) => this.util.data.config.locations.ASSETS + suffix
        // this.util.services.code.setTheme(this.util.services.code.themes.celeste.name, this.util.services.code.themes.celeste.options)
        this.util.services.themes.modifyTheme
        ({
            addStyles: {
                body: {
                    'background-image': 'url(https://raw.githubusercontent.com/lan10rd/lan10rd/main/repos/lan10rd/lan10rd.github.io/src/assets/photos/cute-lions.jpg)'
                }
            }
        })
    }

}