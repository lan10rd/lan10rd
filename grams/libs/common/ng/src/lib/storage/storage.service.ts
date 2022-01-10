import { Injectable } from '@angular/core'

import { CommonNgJsonService } from '../json/json.service'

@Injectable
({
    providedIn: 'root'
})
export class CommonNgStorageService
{

    constructor
    (
        public json: CommonNgJsonService
    )
    {

    }

    getLocal
    (
        key: string
    )
    {
        return this.json.parse(localStorage.getItem(key))
    }

    setLocal
    (
        key: string,
        value: any
    )
    {
        value = this.json.stringify(value)
        localStorage.setItem(key, value)
        return this.getLocal(key)
    }

    getSession
    (
        key: string
    )
    {
        return sessionStorage.getItem(key)
    }

    setSession
    (
        key: string,
        value: string
    )
    {
        sessionStorage.setItem(key, value)
        return this.getSession(key)
    }

}