import { Component } from '@angular/core'

@Component
({
    selector : 'app-init-element',
    templateUrl : './init.element.html',
    styleUrls : ['./init.element.scss']
})
export class AppInitElement
{

    ngOnInit(){
        console.log('app init')
    }

}