import { Injectable } from '@angular/core'

@Injectable
({
    providedIn: 'root'
})
export class CommonNgMathService
{

    pseudoRandom
    (
    )
    {
        return Math.random()
    }

    pseudoRandomInt
    (
        below: number
    )
    {
        return Math.floor(Math.random() * Math.floor(below))
    }

    pseudoRandomIntBetween
    (
        min: number,
        below: number
    )
    {
        return Math.random() * (below - min) + min
    }

    pseudoRandomIntBetweenInclusive
    (
        min:number,
        max: number
    )
    {
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

}