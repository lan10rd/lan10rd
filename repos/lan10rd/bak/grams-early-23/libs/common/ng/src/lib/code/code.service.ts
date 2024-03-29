import { Injectable, Inject, Optional } from '@angular/core'
import { fromEvent, BehaviorSubject } from 'rxjs'

import { CommonNgDocumentService } from '../document/document.service'

/* make sure to put the following in build assets section of angular.json: */
//    { "glob": "**/*", "input": "node_modules/monaco-editor", "output": "assets/monaco-editor" }

@Injectable({ providedIn : 'root'})
export class CommonNgCodeService
{

    monaco : any
    loadPromise : any
    loaded$ : any
    monacoLocation

    constructor
    (
        public doc: CommonNgDocumentService,
        @Optional() @Inject('COMMON_CODE_SERVICE_MONACO_LOCATION') public monaco_location : any
    )
    {
        if (!monaco_location) this.monacoLocation = location.origin + '/assets'
        else this.monacoLocation = monaco_location
        this.loaded$ = new BehaviorSubject(false)
        this.init()
    }

    async load
    (
        options : any = {}
    )
    {
        if (!this.monaco)
        {
            await new Promise((resolve) => {
                let listen$ = this.loaded$.subscribe((val : boolean) => {
                    if (val)
                    {
                        listen$.unsubscribe()
                        resolve(true)
                    }
                })
            })
        }
    }

    async init
    (
    )
    {
        return await new Promise<any>(async (resolve) => {
            if (!this.doc.document.getElementById('loaderjs'))
            {
                let from$: any
                from$ = fromEvent(window, 'message').subscribe(($event: any) => {
                    if ($event?.data?.monaco?.loaded)
                    {
                        this.monaco = (window as any)['monaco']
                        this.initTheme()
                        from$.unsubscribe()
                        this.loaded$.next(true)
                        return resolve(true)
                    }
                })
                await this.doc.loadScript(`${this.monacoLocation}/monaco-editor/min/vs/loader.js`, 'loaderjs')
                
                /* Before loading vs/editor/editor.main, define a global MonacoEnvironment that overwrites
                   the default worker url location (used when creating WebWorkers). The problem here is that
                   HTML5 does not allow cross-domain web workers, so we need to proxy the instantiation of
                   a web worker through a same-domain script
                */
               let encodedUri = 'data:text/javascript;charset=utf-8,' + encodeURIComponent
               (`
                   self.MonacoEnvironment = {
                   baseUrl: '${this.monacoLocation}/monaco-editor/min/'
                   };
                   importScripts('${this.monacoLocation}/monaco-editor/min/vs/base/worker/workerMain.js');`
               )
                let monaco_environment : any = { getWorkerUrl: function(workerId : any, label : any) {return encodedUri} };
                (window as any)['MonacoEnvironment'] = monaco_environment

                await this.doc.createScript
                ( 
                    `
                    require.config({ paths: { vs: '${this.monacoLocation}/monaco-editor/min/vs' } });
                    
                    require(['vs/editor/editor.main'], () => {
                        window.monaco = monaco
                        window.postMessage({monaco: {loaded: true}}, '*')
                    });
                    `,
                    'monaco-editor'
                )
            }
                        
        })
    }

    createEditor
    (
        containerElement : HTMLElement | null,
        model : any,
        options : any = { language : 'typescript' }
    )
    {
        return this.monaco.editor.create(containerElement, {...options, value: model})
    }

    createDiff
    (
        containerElement : HTMLElement | null,
        original : any,
        modified : any,
        options : any = { language : 'typescript' }
    )
    {
        let originalModel = this.monaco.editor.createModel(original, options.language)
        let modifiedModel = this.monaco.editor.createModel(modified, options.language)
        let editor = this.monaco.editor.createDiffEditor(containerElement, options);
        editor.setModel({
            original: originalModel,
            modified: modifiedModel
        })
        return editor
    }

    initTheme
    (
    )
    {
        if (this.customTheme) this.setTheme(this.customTheme.name, this.customTheme.options)
        else this.setTheme(this.themes.whitney.name, this.themes.whitney.options)
    }

    language
    (
        fileName : string
    )
    {
        fileName = fileName.trim().toLowerCase()
        let language = 'javascript'
        if (fileName.endsWith('.aes')) language = 'aes'
        else if (fileName.endsWith('.apex')) language = 'apex'
        else if (fileName.endsWith('.azcli')) language = 'azcli'
        else if (fileName.endsWith('.bat')) language = 'bat'
        else if (fileName.endsWith('.bicep')) language = 'bicep'
        else if (fileName.endsWith('.c')) language = 'c'
        else if (fileName.endsWith('.cameligo')) language = 'cameligo'
        else if (fileName.endsWith('.clojure')) language = 'clojure'
        else if (fileName.endsWith('.abap')) language = 'abap'
        else if (fileName.endsWith('.coffeescript')) language = 'coffeescript'
        else if (fileName.endsWith('.cpp')) language = 'cpp'
        else if (fileName.endsWith('.csharp')) language = 'csharp'
        else if (fileName.endsWith('.csp')) language = 'csp'
        else if (fileName.endsWith('.css')) language = 'css'
        else if (fileName.endsWith('.dart')) language = 'dart'
        else if (fileName.endsWith('.dockerfile')) language = 'dockerfile'
        else if (fileName.endsWith('.ecl')) language = 'ecl'
        else if (fileName.endsWith('.elixir')) language = 'elixir'
        else if (fileName.endsWith('.fsharp')) language = 'fsharp'
        else if (fileName.endsWith('.go')) language = 'go'
        else if (fileName.endsWith('.graphql')) language = 'graphql'
        else if (fileName.endsWith('.hbs')) language = 'handlebars'
        else if (fileName.endsWith('.hcl')) language = 'hcs'
        else if (fileName.endsWith('.html')) language = 'html'
        else if (fileName.endsWith('.ini')) language = 'ini'
        else if (fileName.endsWith('.java')) language = 'java'
        else if (fileName.endsWith('.js')) language = 'javascript'
        else if (fileName.endsWith('.json')) language = 'json'
        else if (fileName.endsWith('.julia')) language = 'julia'
        else if (fileName.endsWith('.kotlin')) language = 'kotlin'
        else if (fileName.endsWith('.less')) language = 'less'
        else if (fileName.endsWith('.lexon')) language = 'lexon'
        else if (fileName.endsWith('.liquid')) language = 'liquid'
        else if (fileName.endsWith('.lua')) language = 'lua'
        else if (fileName.endsWith('.m3')) language = 'm3'
        else if (fileName.endsWith('.md')) language = 'markdown'
        else if (fileName.endsWith('.mips')) language = 'mips'
        else if (fileName.endsWith('.msdax')) language = 'msdax'
        else if (fileName.endsWith('.mysql')) language = 'mysql'
        else if (fileName.endsWith('.objective-c')) language = 'objective-c'
        else if (fileName.endsWith('.pascal')) language = 'pascal'
        else if (fileName.endsWith('.pascaligo')) language = 'pascaligo'
        else if (fileName.endsWith('.perl')) language = 'perl'
        else if (fileName.endsWith('.pgsql')) language = 'pgsql'
        else if (fileName.endsWith('.php')) language = 'php'
        else if (fileName.endsWith('.txt')) language = 'plaintext'
        else if (fileName.endsWith('.postiats')) language = 'postiats'
        else if (fileName.endsWith('.powerquery')) language = 'powerquery'
        else if (fileName.endsWith('.powershell')) language = 'powershell'
        else if (fileName.endsWith('.pug')) language = 'pug'
        else if (fileName.endsWith('.py')) language = 'python'
        else if (fileName.endsWith('.r')) language = 'r'
        else if (fileName.endsWith('.razor')) language = 'razor'
        else if (fileName.endsWith('.redis')) language = 'redis'
        else if (fileName.endsWith('.redshift')) language = 'redshift'
        else if (fileName.endsWith('.restructuredtext')) language = 'restructuredtext'
        else if (fileName.endsWith('.ruby')) language = 'ruby'
        else if (fileName.endsWith('.rust')) language = 'rust'
        else if (fileName.endsWith('.sb')) language = 'sb'
        else if (fileName.endsWith('.scala')) language = 'scala'
        else if (fileName.endsWith('.scheme')) language = 'scheme'
        else if (fileName.endsWith('.scss')) language = 'scss'
        else if (fileName.endsWith('.shell')) language = 'shell'
        else if (fileName.endsWith('.sol')) language = 'sol'
        else if (fileName.endsWith('.sql')) language = 'sql'
        else if (fileName.endsWith('.st')) language = 'st'
        else if (fileName.endsWith('.swift')) language = 'swift'
        else if (fileName.endsWith('.systemverilog')) language = 'systemverilog'
        else if (fileName.endsWith('.tcl')) language = 'tcl'
        else if (fileName.endsWith('.twig')) language = 'twig'
        else if (fileName.endsWith('.ts')) language = 'typescript'
        else if (fileName.endsWith('.vb')) language = 'vb'
        else if (fileName.endsWith('.verilog')) language = 'verilog'
        else if (fileName.endsWith('.xml')) language = 'xml'
        else if (fileName.endsWith('.yaml')) language = 'yaml'
        return language
    }

    customTheme : any
    light : string = 'whitney'
    dark : string = 'whitneyyyy'
    themes: any = {
        whitney : {
            name: 'whitney',
            options: {
                base: "vs",
                inherit: true,
                rules: [
                    { token: '', foreground: 'ff42bd' },
                    { token: 'variable', foreground: 'ff42bd' },
                    { token: 'variable.predefined', foreground: 'ff42bd' },
                    { token: 'variable.parameter', foreground: 'ff42bd' },
                    { token: 'tag', foreground: 'ff9800' },
                    { token: 'tag.id.jade', foreground: '22C3A8' },
                    { token: 'attribute.name', foreground: '22C3A8' },
                    { token: 'invalid', foreground: '2E1536' },
                    { token: 'comment', foreground: 'b897bc' },
                    { token: 'number', foreground: 'E46767' },
                    { token: 'number.hex', foreground: 'E46767' },
                    { token: 'attribute.value', foreground: '957350' },
                    { token: 'attribute.value.number', foreground: '957350' },
                    { token: 'attribute.value.unit', foreground: '957350' },
                    { token: 'attribute.value.html', foreground: '957350' },
                    { token: 'attribute.value.xml', foreground: '957350' },
                    { token: 'string', foreground: 'ff42bd' },
                    { token: 'keyword', foreground: '63f0d8' },
                    { token: 'keyword.json', foreground: '63f0d8' },
                    { token: 'keyword.flow', foreground: '63f0d8' },
                    { token: 'keyword.flow.scss', foreground: '63f0d8' },
                    { token: 'emphasis', fontStyle: 'italic' },
                    { token: 'strong', fontStyle: 'bold' },
                    { token: 'metatag', foreground: '22C3A8' },
                    { token: 'metatag.content.html', foreground: '22C3A8' },
                    { token: 'metatag.html', foreground: '22C3A8' },
                    { token: 'metatag.xml', foreground: '22C3A8' },
                    { token: 'metatag.php', fontStyle: 'bold' },
                    { token: 'type', foreground: 'f58a3d' },
                    { token: 'delimiter', foreground: 'ff9800' },
                    { token: 'delimiter.html', foreground: 'ff9800' },
                    { token: 'delimiter.xml', foreground: 'ff9800' },
                    { token: 'constant', foreground: '8866CC' },
                    { token: 'regexp', foreground: '8866CC' },
                    { token: 'annotation', foreground: '8866CC' },
                    { token: 'tag.class.jade', foreground: '8866CC' },
                    { token: 'meta.scss', foreground: '8866CC' },
                    { token: 'key', foreground: '8866CC' },
                    { token: 'string.key.json', foreground: '8866CC' },
                    { token: 'string.value.json', foreground: '0451A5' },
                    { token: 'string.html', foreground: '8866CC' },
                    { token: 'string.sql', foreground: '8866CC' },
                    { token: 'string.yaml', foreground: '8866CC' },
                    { token: 'operator.scss', foreground: '8866CC' },
                    { token: 'operator.sql', foreground: '8866CC' },
                    { token: 'operator.swift', foreground: '8866CC' },
                    { token: 'predefined.sql', foreground: '8866CC' },
                ],
                "colors": {
                    "activityBar.background": "#f7f7f7",
                    "activityBar.foreground": "#7e7e7e",
                    "editor.background": "#ffffff",
                    "editor.foreground": "#01d85e",
                    "editor.lineHighlightBackground": "#ffffff",
                    "editor.selectionBackground": "#ff4d97",
                    "editorCursor.foreground": "#ff4d97",
                    "editorWhitespace.foreground": "#3b3a32",
                    "sideBar.background": "#f7f7f7",
                    "sideBar.foreground": "#7e7e7e",
                    "editorIndentGuide.activeBackground": "#888888",
                    "editorIndentGuide.background": "#f7f7f7",
                }
            }
        },
        celeste : {
            name: 'celeste',
            options: {
                base: "vs",
                inherit: true,
                rules: [
                    { token: '', foreground: '8866cc' },
                    { token: 'variable', foreground: '8866cc' },
                    { token: 'variable.predefined', foreground: '8866cc' },
                    { token: 'variable.parameter', foreground: '8866cc' },
                    { token: 'tag', foreground: '228EC3' },
                    { token: 'tag.id.jade', foreground: '22C3A8' },
                    { token: 'attribute.name', foreground: '22C3A8' },
                    { token: 'invalid', foreground: '2E1536' },
                    { token: 'comment', foreground: '888888' },
                    { token: 'number', foreground: 'E46767' },
                    { token: 'number.hex', foreground: 'E46767' },
                    { token: 'attribute.value', foreground: '957350' },
                    { token: 'attribute.value.number', foreground: '957350' },
                    { token: 'attribute.value.unit', foreground: '957350' },
                    { token: 'attribute.value.html', foreground: '957350' },
                    { token: 'attribute.value.xml', foreground: '957350' },
                    { token: 'string', foreground: '957350' },
                    { token: 'keyword', foreground: '22c3a8' },
                    { token: 'keyword.json', foreground: '22c3a8' },
                    { token: 'keyword.flow', foreground: '22c3a8' },
                    { token: 'keyword.flow.scss', foreground: '22c3a8' },
                    { token: 'emphasis', fontStyle: 'italic' },
                    { token: 'strong', fontStyle: 'bold' },
                    { token: 'metatag', foreground: '22C3A8' },
                    { token: 'metatag.content.html', foreground: '22C3A8' },
                    { token: 'metatag.html', foreground: '22C3A8' },
                    { token: 'metatag.xml', foreground: '22C3A8' },
                    { token: 'metatag.php', fontStyle: 'bold' },
                    { token: 'type', foreground: 'f58a3d' },
                    { token: 'delimiter', foreground: '228ec3' },
                    { token: 'delimiter.html', foreground: '228ec3' },
                    { token: 'delimiter.xml', foreground: '228ec3' },
                    { token: 'constant', foreground: '8866CC' },
                    { token: 'regexp', foreground: '8866CC' },
                    { token: 'annotation', foreground: '8866CC' },
                    { token: 'tag.class.jade', foreground: '8866CC' },
                    { token: 'meta.scss', foreground: '8866CC' },
                    { token: 'key', foreground: '8866CC' },
                    { token: 'string.key.json', foreground: '8866CC' },
                    { token: 'string.value.json', foreground: '0451A5' },
                    { token: 'string.html', foreground: '8866CC' },
                    { token: 'string.sql', foreground: '8866CC' },
                    { token: 'string.yaml', foreground: '8866CC' },
                    { token: 'operator.scss', foreground: '8866CC' },
                    { token: 'operator.sql', foreground: '8866CC' },
                    { token: 'operator.swift', foreground: '8866CC' },
                    { token: 'predefined.sql', foreground: '8866CC' },
                ],
                "colors": {
                    "activityBar.background": "#f7f7f7",
                    "activityBar.foreground": "#7e7e7e",
                    "editor.background": "#ffffff",
                    "editor.foreground": "#228ec3",
                    "editor.lineHighlightBackground": "#ffffff",
                    "editor.selectionBackground": "#ff4d97",
                    "editorCursor.foreground": "#ff4d97",
                    "editorWhitespace.foreground": "#3b3a32",
                    "sideBar.background": "#f7f7f7",
                    "sideBar.foreground": "#7e7e7e",
                    "editorIndentGuide.activeBackground": "#888888",
                        "editorIndentGuide.background": "#f7f7f7",
                }
            }
        },
        whitneyyyy : {
            name: 'celeste-night',
            options: {
                base: "vs-dark",
                inherit: true,
                rules: [
                    { token: '', foreground: '87d7ff', background: '360035' },
                    { token: 'variable', foreground: 'ffa8f0' },
                    { token: 'variable.predefined', foreground: 'ffa8f0' },
                    { token: 'variable.parameter', foreground: 'ffa8f0' },
                    { token: 'tag', foreground: '228EC3' },
                    { token: 'tag.id.jade', foreground: 'ffa8f0' },
                    { token: 'attribute.name', foreground: 'ffa8f0' },
                    { token: 'invalid', foreground: '2E1536' },
                    { token: 'comment', foreground: '888888' },
                    { token: 'number', foreground: 'E46767' },
                    { token: 'number.hex', foreground: 'E46767' },
                    { token: 'attribute.value', foreground: 'ffee9b' },
                    { token: 'attribute.value.number', foreground: 'ffee9b' },
                    { token: 'attribute.value.unit', foreground: 'ffee9b' },
                    { token: 'attribute.value.html', foreground: 'ffee9b' },
                    { token: 'attribute.value.xml', foreground: 'ffee9b' },
                    { token: 'string', foreground: 'ffa8f0' },
                    { token: 'keyword', foreground: '63f0d8' },
                    { token: 'keyword.json', foreground: '63f0d8' },
                    { token: 'keyword.flow', foreground: '63f0d8' },
                    { token: 'keyword.flow.scss', foreground: '63f0d8' },
                    { token: 'emphasis', fontStyle: 'italic' },
                    { token: 'strong', fontStyle: 'bold' },
                    { token: 'metatag', foreground: 'ffa8f0' },
                    { token: 'metatag.content.html', foreground: 'ffa8f0' },
                    { token: 'metatag.html', foreground: 'ffa8f0' },
                    { token: 'metatag.xml', foreground: 'ffa8f0' },
                    { token: 'metatag.php', fontStyle: 'bold' },
                    { token: 'type', foreground: 'ffb078' },
                    { token: 'delimiter', foreground: '63f0d8' },
                    { token: 'delimiter.html', foreground: '63f0d8' },
                    { token: 'delimiter.xml', foreground: '63f0d8' },
                    { token: 'constant', foreground: 'ffa8f0' },
                    { token: 'regexp', foreground: 'ffa8f0' },
                    { token: 'annotation', foreground: 'ffa8f0' },
                    { token: 'tag.class.jade', foreground: 'ffa8f0' },
                    { token: 'meta.scss', foreground: 'ffa8f0' },
                    { token: 'key', foreground: 'ffa8f0' },
                    { token: 'string.key.json', foreground: 'ffa8f0' },
                    { token: 'string.value.json', foreground: '0451A5' },
                    { token: 'string.html', foreground: 'ffa8f0' },
                    { token: 'string.sql', foreground: 'ffa8f0' },
                    { token: 'string.yaml', foreground: 'ffa8f0' },
                    { token: 'operator.scss', foreground: 'ffa8f0' },
                    { token: 'operator.sql', foreground: 'ffa8f0' },
                    { token: 'operator.swift', foreground: 'ffa8f0' },
                    { token: 'predefined.sql', foreground: 'ffa8f0' },
                ],
                "colors": {
                    "activityBar.background": "#360035",
                    "activityBar.foreground": "#c0c0c0",
                    "editor.background": "#360035",
                    "editor.foreground": "#87d7ff",
                    "editor.lineHighlightBackground": "#333",
                    "editor.selectionBackground": "#ff4d97",
                    "editorCursor.foreground": "#ff4d97",
                    "editorWhitespace.foreground": "#c8c8c8",
                    "sideBar.background": "#360035",
                    "sideBar.foreground": "#c8c8c8"
                }
            }
        }
    }
    
    setTheme
    (
        name : string,
        options ?: {
            base ?: 'vs' | 'vs-dark',
            inherit ?: boolean,
            rules ?: {
                token : string,
                foreground ?: string,
                background ?: string,
                fontStyle ?: 'bold' | 'italic'
            }[],
            colors ?: any
        }
    )
    {
        this.customTheme = {name, options}
        let monaco: any = (<any>window)['monaco']
        if (monaco) this.defineTheme(this.customTheme.name, this.customTheme.options)
    }
    
    defineTheme
    (
        name : string,
        options ?: {
            base ?: 'vs' | 'vs-dark',
            inherit ?: boolean,
            rules ?: {
                token : string,
                foreground ?: string,
                background ?: string,
                fontStyle ?: 'bold' | 'italic'
            }[],
            colors ?: any
        }
    )
    {
        let monaco: any = (<any>window)['monaco']
        monaco.editor.defineTheme(name, options)
        monaco.editor.setTheme(name)
    }

}