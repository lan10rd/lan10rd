import { Component, Inject } from '@angular/core'

import { CommonNgUtilityService, CommonNgThemesService, CommonNgPopopService, 
    // CommonNgCodeService
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
        // public code : CommonNgCodeService,
        @Inject('API') public api: string
    )
    {
        util.services.themes = themes
        util.services.popop = popop
        // util.services.code = code
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
                    'background-image': 'url(https://resources.glass.earth/assets/pexels/raw/purple-jewels.jpg)'
                }
            }
        })
        
        // this.util.services.code.setTheme(this.util.services.code.themes.celeste.name, this.util.services.code.themes.celeste.options)
    }

}