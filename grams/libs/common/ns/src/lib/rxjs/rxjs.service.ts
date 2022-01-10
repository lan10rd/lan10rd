import { Injectable } from '@nestjs/common'

import { 
    /* combination */
    forkJoin, merge,
    /* conditional */
    iif,
    /* creation */
    Observable, defer, from, fromEvent, generate, interval, of, range, throwError, timer,
    /* error */
    /* filter */
    /* multicast */
    /* transformation */
    /* utility */
 } from 'rxjs'

import { 
    /* combination */
    // combineLatestAll,combineLatestWith, concatWith, 
    concatAll, endWith, mergeAll, pairwise, 
    // raceWith, 
    startWith, withLatestFrom, 
    // zipWith,
    /* conditional */
    defaultIfEmpty, every, sequenceEqual,
    /* creation */
    /* error */
    catchError, retry, retryWhen,
    /* filter */
    audit, auditTime, debounce, debounceTime, distinct, distinctUntilChanged, distinctUntilKeyChanged, filter, find, first, ignoreElements, last, sample, single, skip, skipUntil, skipWhile, take, takeLast, takeUntil, takeWhile, throttle, throttleTime,
    /* multicast */
    share, shareReplay, 
    /* transformation */
    buffer, bufferCount, bufferTime, bufferToggle, bufferWhen, concatMap, concatMapTo, expand, exhaustMap, groupBy, map, mapTo, mergeMap, mergeScan, pluck, reduce, scan, switchMap, switchMapTo, toArray, window, windowCount, windowTime, windowToggle, windowWhen,
    /* utility */
    tap, delay, delayWhen, dematerialize, finalize,  repeat, repeatWhen, timeInterval, timeout
} from 'rxjs/operators'

// import { ajax } from 'rxjs/ajax'

@Injectable()
export class CommonNsRxjsService
{

    rxjs: any = {
        /* combination */
        forkJoin, merge,
        /* conditional */
        iif,
        /* creation */
        Observable, defer, from, fromEvent, generate, interval, of, range, throwError, timer,
    }
    operators: any = {
        /* combination */
        // combineLatestAll,combineLatestWith, concatWith, 
        concatAll, endWith, mergeAll, pairwise, 
        // raceWith, 
        startWith, withLatestFrom, 
        // zipWith,
        /* conditional */
        defaultIfEmpty, every, sequenceEqual,
        /* creation */
        /* error */
        catchError, retry, retryWhen,
        /* filter */
        audit, auditTime, debounce, debounceTime, distinct, distinctUntilChanged, distinctUntilKeyChanged, filter, find, first, ignoreElements, last, sample, single, skip, skipUntil, skipWhile, take, takeLast, takeUntil, takeWhile, throttle, throttleTime,
        /* multicast */
        share, shareReplay, 
        /* transformation */
        buffer, bufferCount, bufferTime, bufferToggle, bufferWhen, concatMap, concatMapTo, expand, exhaustMap, groupBy, map, mapTo, mergeMap, mergeScan, pluck, reduce, scan, switchMap, switchMapTo, toArray, window, windowCount, windowTime, windowToggle, windowWhen,
        /* utility */
        tap, delay, delayWhen, dematerialize, finalize,  repeat, repeatWhen, timeInterval, timeout
    }
    // ajax: any = {
    //     ajax
    // }

    async toPromise
    (
        obs
    )
    {
        return new Promise((resolve, reject) => {
            obs.subscribe({
                next: n => resolve(n),
                error: e => reject(e),
                // complete: () => console.log('complete!')
            })
        })
    }

}