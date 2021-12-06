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

    async ngOnInit
    (
    )
    {
        this.util.services.themes.modifyTheme
        ({
            addStyles: {
                body: {
                    'background-image': 'url(https://raw.githubusercontent.com/lan10rd/lan10rd/main/repos/lan10rd/lan10rd.github.io/src/assets/photos/cute-lions.jpg)'
                }
            }
        })
        
        // this.util.services.code.setTheme(this.util.services.code.themes.celeste.name, this.util.services.code.themes.celeste.options)
    }

}