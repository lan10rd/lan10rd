import { Component } from '@angular/core'

import { CommonNgUtilityService } from '@grams/common/ng'

@Component
({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent
{

    init: any = {
        module: async () => (await import('./init/init.element.module')).AppInitElementModule,
        component: async () => (await import('./init/init.element')).AppInitElement
    }

    constructor(public util: CommonNgUtilityService){}
    ngOnInit(){
        console.log('util', this.util)
    }

}
