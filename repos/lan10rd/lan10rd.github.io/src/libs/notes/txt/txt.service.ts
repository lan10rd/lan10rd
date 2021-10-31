import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({ providedIn: 'root' })
export class NotesTxtService
{

    index
    note = ''

    constructor
    (
        public http: HttpClient
    )
    {
        
    }

    async init
    (
    )
    {
        this.index = (await this.http.get('assets/index.json').toPromise()as any).filter(path => path.includes('/notes/')).map(path => path.split('assets/notes/').join(''))
    }

    async changeNote
    (
        path
    )
    {
        this.note = await this.http.get(path, {responseType: 'text'}).toPromise() as any
    }

}