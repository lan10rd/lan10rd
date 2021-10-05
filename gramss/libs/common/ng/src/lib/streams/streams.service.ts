import { Injectable } from '@angular/core'
import { Subject, BehaviorSubject, timer } from 'rxjs'
import { map, share } from 'rxjs/operators'

import { CommonNgJsonService } from '../json/json.service'

@Injectable
({
    providedIn: 'root'
})
export class CommonNgStreamsService
{

    subjects: any = {}
    behaviors: any = {}
    timers: any = {}

    constructor
    (
        public json: CommonNgJsonService
    )
    {

    }

    /* behaviors, ie streamable cache */
    check
    (
        behavior: string,
        path?: string,
        copy?: boolean
    )
    {
        if (!(behavior in this.behaviors))
            return undefined
        if (!path)
            return copy ? this.json.copy(this.behaviors[behavior].getValue()) : this.behaviors[behavior].getValue() // return this.behaviors[behavior].value
        return copy ? this.json.copy(this.json.pathToValue(this.behaviors[behavior].getValue(), path)) : this.json.pathToValue(this.behaviors[behavior].getValue(), path)
    }

    change
    (
        behavior: string,
        data?: any
    )
    {
        if (!(behavior in this.behaviors))
            this.behaviors[behavior] = new BehaviorSubject<any>(data)
        else
            this.behaviors[behavior].next(data)
    }

    get
    (
        behavior: any,
        path?: string
    )
    {
        if (!(behavior in this.behaviors))
            this.behaviors[behavior] = new BehaviorSubject<any>(undefined)
        if (!path)
            return this.behaviors[behavior]
        return this.behaviors[behavior].pipe(map(data => { return this.json.pathToValue(data, path)}))
    }
    
    /* subjects, streams of values */
    dispatch
    (
        subject: string,
        data?: any
    )
    {
        if (!(subject in this.subjects))
            this.subjects[subject] = new Subject<any>()
        this.subjects[subject].next(data)
    }

    fetch
    (
        subject: string
    )
    {
        if (!(subject in this.subjects))
            this.subjects[subject] = new Subject<any>()
        return this.subjects[subject]
    }

    /* timers */
    time
    (
        time: string,
        ms: number
    )
    {
        if (!(time in this.timers))
            this.timers[time] = timer(ms).pipe(share())
        this.timers[time].subscribe((exp: any) => { delete this.timers[time] })
        return this.timers[time]
    }

    watch
    (
        time: string
    )
    {
        return this.timers[time]
    }

}