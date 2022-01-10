import { Injectable } from '@angular/core'

@Injectable
({
    providedIn: 'root'
})
export class CommonNgAppBarService
{

    show: string = ''
    appBarElementRef: any
    middleBar: {component: any, module: any} | undefined

    async open
    (
        incoming: string
    )
    { 
        if (this.show === incoming) this.show = ''
        else this.show = incoming
    }

}