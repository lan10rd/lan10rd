import { Component } from '@angular/core'

@Component
({
  selector: 'app',
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App
{

    init: any = {}

    async ngOnInit
    (
    )
    {
        this.init = {
            module: (await import('./init/init.element.module')).AppInitElementModule,
            component: (await import('./init/init.element')).AppInitElement
        }
    }

}
