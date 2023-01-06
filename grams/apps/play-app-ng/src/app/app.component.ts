import { Component } from '@angular/core'

@Component
({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent
{

    init: any = {
    //     module: async () => (await import('./init/init.element.module')).AppInitElementModule,
    //     component: async () => (await import('./init/init.element')).AppInitElement
    }

    async ngOnInit(){
        this.init.module = (await import('./init/init.element.module')).AppInitElementModule
        this.init.component = (await import('./init/init.element')).AppInitElement
    }

}
