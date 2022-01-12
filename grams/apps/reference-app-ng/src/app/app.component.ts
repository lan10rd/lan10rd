import { Component } from '@angular/core'

@Component
({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent
{

    /* comment */
    init: any = {
        module: async () => (await import('./init/init.element.module')).AppInitElementModule,
        component: async () => (await import('./init/init.element')).AppInitElement
    }

}
