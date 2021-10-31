import { Component, OnInit } from '@angular/core'

import { CommonNgUtilityService } from '@lanl0rd/common/ng'

@Component
({
    selector : 'common-feature',
    templateUrl : './common.feature.html',
    styleUrls : ['./common.feature.scss']
})
export class CommonFeature
{

    async print(a:any){
        this.util.services.popop.open
            (
                (await import('./pop/pop.popop')).CommonPopPopop,
                (await import('./pop/pop.popop.module')).CommonPopPopopModule,
                {
                    
                }
            )
        console.log(a)
    }

    select : any = {
        basic_options : ['a', 'b', 'c'],
        object_options : { 'a' : { name : 'a' }, 'b' : { name : 'b' }, 'c' : { name : 'c' } },
        array_options : [{name : 'a'}, {name : 'b'}, {name : 'c'}],
        search_options: {
            a: {contents: 'a'},
            ba: {contents: 'ba'},
            c: {contents: 'c'},
            d: {contents: 'd'},
            da: {contents: 'da'}
        },
        example_options: {
            'dev/super.yaml' : {
                image: 'hi',
                yo : {

                },
                some: {
                    ting: 'a'
                }
            },
            'abc.yaml' : {
                image: 'ay',
                yoyo : {

                },
                some: {
                    ting: 'b'
                }
            },
            'def.yaml' : {
                image: 'ayasd',
                yoyo : {

                },
                some: {
                    ting: 'c'
                }
            },
        }
    }
    chosen_example : any

    image : any

    logs : string = `1: "\u001b[32m[Nest] 50   - \u001b[39m07/06/2021, 8:02:52 PM   \u001b[38;5;3m[RouterExplorer] \u001b[39m\u001b[32mMapped {/spirits/destroy, POST} route\u001b[39m\u001b[38;5;3m +2ms\u001b[39m\n\u001b[32m[Nest] 50   - \u001b[39m07/06/2021, 8:02:52 PM   \u001b[38;5;3m[RouterExplorer] \u001b[39m\u001b[32mMapped {/spirits/destroy/success, POST} route\u001b[39m\u001b[38;5;3m +2ms\u001b[39m\n\u001b[32m[Nest] 50   - \u001b[39m07/06/2021, 8:02:52 PM   \u001b[38;5;3m[RouterExplorer] \u001b[39m\u001b[32mMapped {/spirits/search, GET} route\u001b[39m\u001b[38;5;3m +3ms\u001b[39m\n\u001b[32m[Nest] 50   - \u001b[39m07/06/2021, 8:02:52 PM   \u001b[38;5;3m[RouterExplorer] \u001b[39m\u001b[32mMapped {/spirits/profile/:passport_name, GET} route\u001b[39m\u001b[38;5;3m +3ms\u001b[39m\n\u001b[32m[Nest] 50   - \u001b[39m07/06/2021, 8:02:52 PM   \u001b[38;5;3m[RoutesResolver] \u001b[39m\u001b[32mDomainsController {/domains}:\u001b[39m\u001b[38;5;3m +1ms\u001b[39m\n\u001b[32m[Nest] 50   - \u001b[39m07/06/2021, 8:02:52 PM   \u001b[38;5;3m[RouterExplorer] \u001b[39m\u001b[32mMapped {/domains/create/realm, POST} route\u001b[39m\u001b[38;5;3m +3ms\u001b[39m\n\u001b[32m[Nest] 50   - \u001b[39m07/06/2021, 8:02:52 PM   \u001b[38;5;3m[RouterExplorer] \u001b[39m\u001b[32mMapped {/domains/create/spirit, POST} route\u001b[39m\u001b[38;5;3m +2ms\u001b[39m\n\u001b[32m[Nest] 50   - \u001b[39m07/06/2021, 8:02:52 PM   \u001b[38;5;3m[RoutesResolver] \u001b[39m\u001b[32mRouterController {/router}:\u001b[39m\u001b[38;5;3m +2ms\u001b[39m\n\u001b[32m[Nest] 50   - \u001b[39m07/06/2021, 8:02:52 PM   \u001b[38;5;3m[RouterExplorer] \u001b[39m\u001b[32mMapped {/router/realms/:realm_id/routes, GET} route\u001b[39m\u001b[38;5;3m +3ms\u001b[39m\n\u001b[32m[Nest] 50   - \u001b[39m07/06/2021, 8:02:52 PM   \u001b[38;5;3m[RouterExplorer] \u001b[39m\u001b[32mMapped {/router/realms/:realm_id/:route_name, POST} route\u001b[39m\u001b[38;5;3m +14ms\u001b[39m\n\u001b[32m[Nest] 50   - \u001b[39m07/06/2021, 8:02:52 PM   \u001b[38;5;3m[RouterExplorer] \u001b[39m\u001b[32mMapped {/router/realms/:realm_id/:route_name, PUT} route\u001b[39m\u001b[38;5;3m +4ms\u001b[39m\n\u001b[32m[Nest] 50   - \u001b[39m07/06/2021, 8:02:52 PM   \u001b[38;5;3m[RouterExplorer] \u001b[39m\u001b[32mMapped {/router/routes/spirits, GET} route\u001b[39m\u001b[38;5;3m +2ms\u001b[39m\n\u001b[32m[Nest] 50   - \u001b[39m07/06/2021, 8:02:52 PM   \u001b[38;5;3m[RouterExplorer] \u001b[39m\u001b[32mMapped {/router/build/realms/:realm_id, POST} route\u001b[39m\u001b[38;5;3m +3ms\u001b[39m\n\u001b[32m[Nest] 50   - \u001b[39m07/06/2021, 8:02:52 PM   \u001b[38;5;3m[RouterExplorer] \u001b[39m\u001b[32mMapped {/router/parse/conf/realms/:realm_id, POST} route\u001b[39m\u001b[38;5;3m +2ms\u001b[39m\n\u001b[32m[Nest] 50   - \u001b[39m07/06/2021, 8:02:52 PM   \u001b[38;5;3m[RoutesResolver] \u001b[39m\u001b[32mServicesController {/services}:\u001b[39m\u001b[38;5;3m +2ms\u001b[39m\n\u001b[32m[Nest] 50   - \u001b[39m07/06/2021, 8:02:52 PM   \u001b[38;5;3m[RouterExplorer] \u001b[39m\u001b[32mMapped {/services/realms/:realm_id/details, GET} route\u001b[39m\u001b[38;5;3m +15ms\u001b[39m\n\u001b[32m[Nest] 50   - \u001b[39m07/06/2021, 8:02:52 PM   \u001b[38;5;3m[RouterExplorer] \u001b[39m\u001b[32mMapped {/services/realms/:realm_id/stacks, GET} route\u001b[39m\u001b[38;5;3m +2ms\u001b[39m\n\u001b[32m[Nest] 50   - \u001b[39m07/06/2021, 8:02:52 PM   \u001b[38;5;3m[RouterExplorer] \u001b[39m\u001b[32mMapped {/services/realms/:realm_id/stats, GET} route\u001b[39m\u001b[38;5;3m +3ms\u001b[39m\n\u001b[32m[Nest] 50   - \u001b[39m07/06/2021, 8:02:52 PM   \u001b[38;5;3m[RouterExplorer] \u001b[39m\u001b[32mMapped {/services/realms/:realm_id/stack/status, GET} route\u001b[39m\u001b[38;5;3m +2ms\u001b[39m\n\u001b[32m[Nest] 50   - \u001b[39m07/06/2021, 8:02:52 PM   \u001b[38;5;3m[RouterExplorer] \u001b[39m\u001b[32mMapped {/services/realms/:realm_id/inspect, GET} route\u001b[39m\u001b[38;5;3m +2ms\u001b[39m\n\u001b[32m[Nest] 50   - \u001b[39m07/06/2021, 8:02:52 PM   \u001b[38;5;3m[RouterExplorer] \u001b[39m\u001b[32mMapped {/services/realms/:realm_id/list, GET} route\u001b[39m\u001b[38;5;3m +14ms\u001b[39m\n\u001b[32m[Nest] 50   - \u001b[39m07/06/2021, 8:02:52 PM   \u001b[38;5;3m[RouterExplorer] \u001b[39m\u001b[32mMapped {/services/stacks/spirits, GET} route\u001b[39m\u001b[38;5;3m +3ms\u001b[39m\n\u001b[32m[Nest] 50   - \u001b[39m07/06/2021, 8:02:52 PM   \u001b[38;5;3m[RouterExplorer] \u001b[39m\u001b[32mMapped {/services/site, GET} route\u001b[39m\u001b[38;5;3m +3ms\u001b[39m\n\u001b[32m[Nest] 50   - \u001b[39m07/06/2021, 8:02:52 PM   \u001b[38;5;3m[RoutesResolver] \u001b[39m\u001b[32mFilesController {/files}:\u001b[39m\u001b[38;5;3m +2ms\u001b[39m\n\u001b[32m[Nest] 50   - \u001b[39m07/06/2021, 8:02:52 PM   \u001b[38;5;3m[RouterExplorer] \u001b[39m\u001b[32mMapped {/files/site, GET} route\u001b[39m\u001b[38;5;3m +3ms\u001b[39m\n\u001b[32m[Nest] 50   - \u001b[39m07/06/2021, 8:02:52 PM   \u001b[38;5;3m[RouterExplorer] \u001b[39m\u001b[32mMapped {/files/realms/:realm_id, GET} route\u001b[39m\u001b[38;5;3m +2ms\u001b[39m\n\u001b[32m[Nest] 50   - \u001b[39m07/06/2021, 8:02:52 PM   \u001b[38;5;3m[RouterExplorer] \u001b[39m\u001b[32mMapped {/files/copy/realms/:realm_id, PUT} route\u001b[39m\u001b[38;5;3m +3ms\u001b[39m\n\u001b[32m[Nest] 50   - \u001b[39m07/06/2021, 8:02:52 PM   \u001b[38;5;3m[RouterExplorer] \u001b[39m\u001b[32mMapped {/files/move/realms/:realm_id, PUT} route\u001b[39m\u001b[38;5;3m +2ms\u001b[39m\n\u001b[32m[Nest] 50   - \u001b[39m07/06/2021, 8:02:52 PM   \u001b[38;5;3m[RouterExplorer] \u001b[39m\u001b[32mMapped {/files/realms/:realm_id, PUT} route\u001b[39m\u001b[38;5;3m +2ms\u001b[39m\n\u001b[32m[Nest] 50   - \u001b[39m07/06/2021, 8:02:52 PM   \u001b[38;5;3m[RouterExplorer] \u001b[39m\u001b[32mMapped {/files/realms/:realm_id, POST} route\u001b[39m\u001b[38;5;3m +3ms\u001b[39m\n\u001b[32m[Nest] 50   - \u001b[39m07/06/2021, 8:02:52 PM   \u001b[38;5;3m[RouterExplorer] \u001b[39m\u001b[32mMapped {/files/destroy/realms/:realm_id, DELETE} route\u001b[39m\u001b[38;5;3m +3ms\u001b[39m\n\u001b[32m[Nest] 50   - \u001b[39m07/06/2021, 8:02:52 PM   \u001b[38;5;3m[RouterExplorer] \u001b[39m\u001b[32mMapped {/files/spirits, GET} route\u001b[39m\u001b[38;5;3m +2ms\u001b[39m\n\u001b[32m[Nest] 50   - \u001b[39m07/06/2021, 8:02:52 PM   \u001b[38;5;3m[RouterExplorer] \u001b[39m\u001b[32mMapped {/files/spirits, PUT} route\u001b[39m\u001b[38;5;3m +2ms\u001b[39m\n\u001b[32m[Nest] 50   - \u001b[39m07/06/2021, 8:02:52 PM   \u001b[38;5;3m[RouterExplorer] \u001b[39m\u001b[32mMapped {/files/spirits/move, PUT} route\u001b[39m\u001b[38;5;3m +3ms\u001b[39m\n\u001b[32m[Nest] 50   - \u001b[39m07/06/2021, 8:02:52 PM   \u001b[38;5;3m[RouterExplorer] \u001b[39m\u001b[32mMapped {/files/spirits/copy, PUT} route\u001b[39m\u001b[38;5;3m +2ms\u001b[39m\n\u001b[32m[Nest] 50   - \u001b[39m07/06/2021, 8:02:52 PM   \u001b[38;5;3m[RouterExplorer] \u001b[39m\u001b[32mMapped {/files/spirits, POST} route\u001b[39m\u001b[38;5;3m +2ms\u001b[39m\n\u001b[32m[Nest] 50   - \u001b[39m07/06/2021, 8:02:52 PM   \u001b[38;5;3m[RouterExplorer] \u001b[39m\u001b[32mMapped {/files/spirits/destroy, DELETE} route\u001b[39m\u001b[38;5;3m +3ms\u001b[39m\n\u001b[32m[Nest] 50   - \u001b[39m07/06/2021, 8:02:53 PM   \u001b[38;5;3m[NestApplication] \u001b[39m\u001b[32mNest application successfully started\u001b[39m\u001b[38;5;3m +693ms\u001b[39m\n\u001b[32m[Nest] 50   - \u001b[39m07/06/2021, 8:02:53 PM   \u001b[32mListening at http://localhost:3000/\u001b[39m\u001b[38;5;3m +7ms\u001b[39m\nnew connection evMgEXPhJ8Ddjnr6AAAB current execs {} current logs {}\nreceived hi' sup\nlogs child process exited with code 1 [ 'evMgEXPhJ8Ddjnr6AAAB' ]\nlogs child process exited with code 1 [ 'evMgEXPhJ8Ddjnr6AAAB' ]\nNo type errors found\nVersion: typescript 4.2.4\nTime: 33660ms\nnew connection bca26nVI-6RBA5cjAAAD current execs {} current logs {}\nreceived hi' sup\nnew connection wgQqHFPJCB8xVr9ZAAAF current execs {\n  'bca26nVI-6RBA5cjAAAD': <ref *1> ChildProcess {\n    _events: [Object: null prototype] { close: [Function (anonymous)] },\n    _eventsCount: 1,\n    _maxListeners: undefined,\n    _closesNeeded: 3,\n    _closesGot: 0,\n    connected: false,\n    signalCode: null,\n    exitCode: null,\n    killed: false,\n    spawnfile: 'sudo',\n    _handle: Process {\n      onexit: [Function (anonymous)],\n      pid: 191,\n      [Symbol(owner_symbol)]: [Circular *1]\n    },\n    spawnargs: [\n      'sudo',\n      'docker',\n      'exec',\n      '-i',\n      '373a9ee050458624bbdab76e22d36f67567c1c06cb3c063b90bdcf43954f7572',\n      'sh'\n    ],\n    pid: 191,\n    stdin: Socket {\n      connecting: false,\n      _hadError: false,\n      _parent: null,\n      _host: null,\n      _readableState: [ReadableState],\n      _events: [Object: null prototype],\n      _eventsCount: 1,\n      _maxListeners: undefined,\n      _writableState: [WritableState],\n      allowHalfOpen: false,\n      _sockname: null,\n      _pendingData: null,\n      _pendingEncoding: '',\n      server: null,\n      _server: null,\n      [Symbol(async_id_symbol)]: 1130,\n      [Symbol(kHandle)]: [Pipe],\n      [Symbol(kSetNoDelay)]: false,\n      [Symbol(lastWriteQueueSize)]: 0,\n      [Symbol(timeout)]: null,\n      [Symbol(kBuffer)]: null,\n      [Symbol(kBufferCb)]: null,\n      [Symbol(kBufferGen)]: null,\n      [Symbol(kCapture)]: false,\n      [Symbol(kBytesRead)]: 0,\n      [Symbol(kBytesWritten)]: 0\n    },\n    stdout: Socket {\n      connecting: false,\n      _hadError: false,\n      _parent: null,\n      _host: null,\n      _readableState: [ReadableState],\n      _events: [Object: null prototype],\n      _eventsCount: 3,\n      _maxListeners: undefined,\n      _writableState: [WritableState],\n      allowHalfOpen: false,\n      _sockname: null,\n      _pendingData: null,\n      _pendingEncoding: '',\n      server: null,\n      _server: null,\n      [Symbol(async_id_symbol)]: 1131,\n      [Symbol(kHandle)]: [Pipe],\n      [Symbol(kSetNoDelay)]: false,\n      [Symbol(lastWriteQueueSize)]: 0,\n      [Symbol(timeout)]: null,\n      [Symbol(kBuffer)]: null,\n      [Symbol(kBufferCb)]: null,\n      [Symbol(kBufferGen)]: null,\n      [Symbol(kCapture)]: false,\n      [Symbol(kBytesRead)]: 0,\n      [Symbol(kBytesWritten)]: 0\n    },\n    stderr: Socket {\n      connecting: false,\n      _hadError: false,\n      _parent: null,\n      _host: null,\n      _readableState: [ReadableState],\n      _events: [Object: null prototype],\n      _eventsCount: 3,\n      _maxListeners: undefined,\n      _writableState: [WritableState],\n      allowHalfOpen: false,\n      _sockname: null,\n      _pendingData: null,\n      _pendingEncoding: '',\n      server: null,\n      _server: null,\n      [Symbol(async_id_symbol)]: 1132,\n      [Symbol(kHandle)]: [Pipe],\n      [Symbol(kSetNoDelay)]: false,\n      [Symbol(lastWriteQueueSize)]: 0,\n      [Symbol(timeout)]: null,\n      [Symbol(kBuffer)]: null,\n      [Symbol(kBufferCb)]: null,\n      [Symbol(kBufferGen)]: null,\n      [Symbol(kCapture)]: false,\n      [Symbol(kBytesRead)]: 0,\n      [Symbol(kBytesWritten)]: 0\n    },\n    stdio: [ [Socket], [Socket], [Socket] ],\n    [Symbol(kCapture)]: false\n  }\n} current logs {\n  'bca26nVI-6RBA5cjAAAD': <ref *1> ChildProcess {\n    _events: [Object: null prototype] { close: [Function (anonymous)] },\n    _eventsCount: 1,\n    _maxListeners: undefined,\n    _closesNeeded: 3,\n    _closesGot: 0,\n    connected: false,\n    signalCode: null,\n    exitCode: null,\n    killed: false,\n    spawnfile: 'sudo',\n    _handle: Process {\n      onexit: [Function (anonymous)],\n      pid: 192,\n      [Symbol(owner_symbol)]: [Circular *1]\n    },\n    spawnargs: [\n      'sudo',\n      'docker',\n      'logs',\n"`

    constructor
    (
        public util: CommonNgUtilityService
    )
    {

    }

}