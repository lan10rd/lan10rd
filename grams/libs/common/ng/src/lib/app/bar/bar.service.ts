import { Injectable } from '@angular/core'

@Injectable
({
    providedIn: 'root'
})
export class CommonNgAppBarService
{

    show: string = ''

    async open
    (
        incoming: string
    )
    { 
        if (this.show === incoming) this.show = ''
        else this.show = incoming
    }

}