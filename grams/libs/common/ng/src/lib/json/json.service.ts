import { Injectable } from '@angular/core'

@Injectable
({
    providedIn: 'root'
})
export class CommonNgJsonService
{

    constructor
    (
    )
    {
        this.isToggled.bind(this)
    }

    parse
    (
        json: any
    )
    {
        try
        {
            if (this.typeOf(json) === 'obj')
                return json
            return JSON.parse(json)
        }
        catch(e)
        {
            return json
        }
    }

    stringify
    (
        json: any,
        pretty?: number
    )
    {
        try
        {
            if (this.typeOf(json) === 'str')
                return json
            return pretty ? JSON.stringify(json, undefined, pretty) : JSON.stringify(json)
        }
        catch(e)
        {
            return json
        }
    }

    in
    (
        key: string,
        json: any
    )
    {
        return key in json
    }

    has
    (
        key: string,
        json: any
    )
    {
        switch(this.typeOf(json))
        {
            case 'obj':
            {
                return key in json
            }
            case 'arr':
            {
                return json.indexOf(key) > -1
            }
            default:
                return false
        }
    }

    toggle
    (
        target: any,
        key: string,
        selection: string
    )
    {
        if (this.typeOf(target[key]) === 'str')
        {
            if (target[key] === selection)
                target[key] = ''
            else
                target[key] = selection
        }
        else if (this.typeOf(target[key]) === 'arr')
        {
            let indexOf = target[key].indexOf(selection)
            if (indexOf > -1)
                this.remove(target[key], selection)
            else
                target[key].push(selection)
        }
    }

    isToggled
    (
        target: any,
        key: string,
        selection: string
    )
    {
        if (this.typeOf(target[key]) === 'str')
            return target[key] === selection
        // else if (this.typeOf(target[key]) === 'arr')
            return target[key].indexOf(selection) > -1
    }

    keys
    (
        obj: any
    )
    {
        try
        {
           return Object.keys(obj) as any
        }
        catch(e)
        {
            return []
        }
    }

    values
    (
        obj: any
    )
    {
        try
        {
            return Object.values(obj) as any
        }
        catch(e)
        {
            return []
        }
    }

    entries
    (
        obj: any
    )
    {
        try
        {
            return Object.entries(obj) as any
        }
        catch(e)
        {
            return []
        }
    }

    clone
    (
        obj: any
    )
    {
        try
        {
            return this.parse(this.stringify(obj))
        }
        catch(e)
        {
            return obj
        }
    }

    remove
    (
        a: any,
        obj: any
    )
    {
        try
        {
            switch(this.typeOf(a))
            {
                case 'obj':
                {
                    if (this.typeOf(obj) === 'str' && obj in a)
                    {
                        delete a[obj]
                        return a
                    }
                    let ind = this.values(a).indexOf(obj)
                    if (ind > -1)
                        delete a[this.keys(a)[ind]]
                    return a
                }
                case 'arr':
                {
                    return a.filter((item: any) => { return this.stringify(item) !== this.stringify(obj) })
                }
                default:
                    return a
            }
        }
        catch(e)
        {
            return a
        }
    }

    removeFromObject(a: any, key: string){ delete a[key] }

    removeFromArray
    (
        a: any[],
        index: number
    )
    {
        a.splice(index, 1)
        return a
    }

    isDefined
    (
        a: any
    )
    {
        return this.typeOf(a) !== 'und' && a != null
    }

    typeOf
    (
        a: any
    ) 
    {
        if (a instanceof Array)
            return 'arr'
        else if (typeof a === 'object')
            return 'obj'
        else if (typeof a === 'string')
            return 'str'
        else if (typeof a === 'number')
            return 'num'
        else if (typeof a === 'boolean')
            return 'boo'
        else if (typeof a === 'undefined')
            return 'und'
        else return typeof a
    }

    equals
    (
        a: any,
        b: any
    )
    {
        return a === b || this.stringify(a) === this.stringify(b)
        // if (a === b)
        //     return true
        // if (typeof a != 'object' || typeof b != 'object' || a == null || b == null)
        //     return false
        // let keysA = Object.keys(a), keysB = Object.keys(b)
        // if (keysA.length != keysB.length)
        //     return false;
        // for (let key of keysA)
        // {
        //     if (!keysB.includes(key))
        //         return false
        //     if (typeof a[key] === 'function' || typeof b[key] === 'function')
        //         if (a[key].toString() != b[key].toString())
        //             return false
        //     else if (!this.equals(a[key], b[key]))
        //             return false
        // }
        // return true
    }

    removeDuplicates
    (
        a: any
    )
    {
        return [...new Set(a)]
    }

    removeDuplicateObjects
    (
        a: any,
        inPlace: boolean = false
    )
    {
        /*

        How about with some es6 magic?
        */
        let b = a.filter( (thing: any, index: number, self: any) => {
            return index === self.findIndex((t: any) => {
                let isEqual = true
                for (let key of Object.keys(t))
                {
                    if (t[key] !== thing[key])
                    {
                        isEqual = false
                        break
                    }
                }
                return  isEqual
            })
        })
        if (inPlace)
            a = b
        return b
        /*
        Reference URL

        A more generic solution would be:

        const uniqueArray = things.thing.filter((thing, index) => {
        const _thing = JSON.stringify(thing);
        return index === things.thing.findIndex(obj => {
            return JSON.stringify(obj) === _thing;
        });
        });
        */
    }

    split
    (
        s: string,
        split: string
    )
    {
        try
        {
            console.log(s, split)
            return s.split(split)
        }
        catch(e)
        {
            return []
        }
    }

    join
    (
        arr: any[],
        join: string
    )
    {
        return arr.join(join)
    }

    unique
    (
        arr?: any
    )
    {
        return [...new Set(arr)]
    }

    encodeURI
    (
        uri: string
    )
    {
        return encodeURI(uri)
    }

    decodeURI
    (
        uri: string
    )
    {
        return decodeURI(uri)
    }

    encodeURIComponent
    (
        uri: string
    )
    {
        return encodeURIComponent(uri)
    }

    decodeURIComponent
    (
        uri: string
    )
    {
        return decodeURIComponent(uri)
    }

    copy
    (
        obj: any
    )
    {
        return this.parse(this.stringify(obj))
    }

    pathToValue
    (
        jsonData: any,
        path: string
    )
    {
        if (!(jsonData instanceof Object) || typeof (path) === "undefined")
            return jsonData
        path = path.replace(/\[(\w+)\]/g, '.$1') // convert indexes to properties
        path = path.replace(/^\./, '') // strip a leading dot
        let pathArray = path.split('.')
        for (let i = 0, n = pathArray.length; i < n; ++i)
        {
            let key = pathArray[i]
            if (key in jsonData)
            {
                if (jsonData[key] !== null)
                    jsonData = jsonData[key];
                else
                    return null;
            }
            else
            {
                return null
            }
        }
        return jsonData
    }

    trackBy
    (
        i: number,
        obj: any
    )
    {
        if (!obj)
            return undefined
        return i
    }

    capitalize
    (
        s: string
    )
    {
        return s.charAt(0).toUpperCase() + s.slice(1)
    }

    mergeArrays
    (
        a: any[],
        b: any[]
    )
    {
        return a.concat(b)
    }

    parseJwt
    (
        token: string
    )
    {
        let base64Url = token.split('.')[1]
        let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
        let jsonPayload = decodeURIComponent(atob(base64).split('').map(c => {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
        }).join(''))
        return JSON.parse(jsonPayload)
    }

}