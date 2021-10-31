import { Component, Input, Output, EventEmitter, ViewChild, ChangeDetectorRef, ViewEncapsulation, ViewChildren} from '@angular/core'
import { fromEvent, merge } from 'rxjs'
import { mapTo } from 'rxjs/operators'
import { CommonNgDocumentService } from '../document/document.service'
import { CommonNgJsonService } from '../json/json.service'

@Component
({
    selector : 'common-ng-select-element',
    templateUrl : './select.element.html',
    styleUrls : ['./select.element.scss'],
    encapsulation: ViewEncapsulation.None
})
export class CommonNgSelectElement
{
    
    __options : any
    _options : any
    _option : any
    _type : any
    selected : number = -7

    @Input() option: any
    @Output() optionChange: any = new EventEmitter()
    @Input() options: any
    @Input() path : any 

    @Input() initial : any

    @Input() toggleable : boolean = true
    @Input() filterFun : any
    @Input() searchEnabled : boolean = true
    @Input() searchEnabledSize : number = 1
    @Input() search : string = ''
    @Output() searchChange : any = new EventEmitter()

    @Input() scrollClasses : any
    @Input() scrollStyles : any
    @Input() buttonClasses : any
    @Input() buttonStyles : any
    @Input() color : string = 'white' // TODO: get color using style service or something to inspect value of color in glo-0-text class

    @Input() emitUndefined : boolean = true

    @Input() height : any = '3.25rem'
    @Input() big : any = false
    @Input() big_threshold : number = 50

    @ViewChild('bigScrollElement', {static: false}) bigScrollElement: any
    @ViewChildren('buttons') buttons : any

    show_search : boolean = false
    has_focus : boolean = false
    has_focus$ : any
    trap_focus : boolean = false
    focused_button : number = 0

    constructor
    (
        public cd : ChangeDetectorRef,
        public json : CommonNgJsonService,
        public document : CommonNgDocumentService
    )
    {
        
    }

    ngOnInit
    (
    )
    {
        if (!this.buttonClasses)
            this.buttonClasses = 'p glo-0-text-ani ib'
        if (!this.buttonStyles)
            this.buttonStyles = ''
    }

    ngOnChanges
    (
        changes: any
    )
    {
        setTimeout(() => {
            if ('options' in changes)
            {
                if (!changes.options.firstChange) // this was done to reset select if options change but it then had to do dont emit undefined for one of the particular usages, sooo
                    this.select(-7)
                if (changes.options.currentValue)
                {
                    let optionsType = this.json.typeOf(changes.options.currentValue)
                    if (optionsType === 'obj')
                    {
                        let keys = this.json.keys((changes.options.currentValue))
                        if (keys.length > 0)
                        {
                            let first = changes.options.currentValue[keys[0]]
                            this._type = this.json.typeOf(first) + '{}'
                        }
                    }
                    else if (optionsType === 'arr')
                    {
                        if (changes.options.currentValue.length > 0)
                        {
                            let first = changes.options.currentValue[0]
                            this._type = this.json.typeOf(first) + '[]'
                        }
                    }
                    if (this._type)
                        this.setOptions()
                }
                if (this.options?.length >= this.big_threshold)
                    this.big = true
                else
                    this.big = false
            }

            // try to set initial if its undefined
            if ( !this.option && this.initial && this._options && this._options.length > 0)
            {
                let type = this.json.typeOf(this.initial)
                if (type === 'boo')
                    this.select(0)
                else if (type === 'num')
                    this.select(this.initial)
                else if (type === 'str')
                {
                    for (let i = 0; i < this._options.length; i++)
                    {
                        if (this._options[i] === this.initial)
                        {
                            this.select(i) // only emit if the first change from changes
                            break
                        }
                    }
                }
            }

            // is this necessary? apparently yes, noticed that when switching the option in nested scenario it wasnt reapplying, might be a better way but the if index is different check seems to work
            if ('option' in changes && this._options)
            {
                for (let i = 0; i < this._options.length; i++)
                {
                    if (this._type === 'str[]')
                    {
                        if (this._options[i] === changes.option.currentValue)
                        {
                            if (this.selected !== i) //added this cause it was causeing duplicate calls
                            {
                                this.select(i) // consider not emitting, im not entirely sure this is necessary to emit, but it may be
                            }
                            break
                        }
                    }
                    else if (this.path)
                    {
                        if (this._options[i] === this.json.pathToValue(changes.option.currentValue, this.path))
                        {
                            if (this.selected !== i) //added this cause it was causeing duplicate calls
                            {
                                this.select(i) // consider not emitting, im not entirely sure this is necessary to emit, but it may be
                            }
                            break
                        }
                    }
                }
            }

        }, 0)
    }

    cycleButton
    (
        $event: any,
        scroller: any
    )
    {
        if ($event?.key === 'Tab')
        {
            $event.preventDefault()
            let next_focus = this.focused_button + 1
            if ($event.shiftKey)
                next_focus = this.focused_button - 1
            else
                next_focus = this.focused_button + 1

            if (next_focus < 0)
                next_focus = this.__options.length - 1
            else if (next_focus > this.__options.length - 1)
                next_focus = 0
                
            let buttons = scroller.child?.nativeElement?.querySelectorAll('button')
            if (!buttons)
            {
                let next_btn = this.buttons.find((btn: any, i: number) => { return +btn.nativeElement.attributes['x-button-i'].value === next_focus })
                if (next_btn?.nativeElement)
                    next_btn.nativeElement.focus()
                else
                {
                    let scrolly = scroller.elementRef.nativeElement.querySelector('.cdk-virtual-scroll-content-wrapper').parentElement
                    if (next_focus === 0)
                    {
                        scrolly.scrollTo({left: 0})
                    }
                    else
                    {
                        scrolly.scrollTo({left: scrolly.scrollWidth})
                    }
                    setTimeout(() => {
                        let buttons = scroller.elementRef.nativeElement.querySelectorAll('button')
                        let nxt_btn = buttons[next_focus === 0 ? 0 : buttons.length - 1]
                        nxt_btn.focus()
                    }, 25)
                }
            }
            else
                buttons[next_focus].focus()
        }
    }

    async buttonFocus
    (
        i: number,
        $event: any
    )
    {
        this.focused_button = i
    }

    async focus
    (
        wrapper: any,
        scroller: any,
        $event: any
    )
    {
        let srcElement = $event.srcElement
        this.trap_focus = false // maybe
        if (this.searchEnabled && !this.has_focus$ && this._options.length >= this.searchEnabledSize)
        {
            this.show_search = true
            this.has_focus$ = merge
            (
                fromEvent(this.document.document.documentElement, 'mousedown'),
                fromEvent(this.document.document.documentElement, 'touchstart'),
                fromEvent(this.document.document.documentElement, 'keyup')
            ).subscribe((evt: any)=>{
                if (evt.composedPath().indexOf( wrapper ) === -1)
                {
                    this.unfocus()
                }
                else
                {
                    if (evt?.key === 'Enter')
                    {
                        if (!this.trap_focus)
                        {
                            let first_button = scroller.child?.nativeElement?.querySelector('button')
                            if (!first_button)
                                first_button = scroller.elementRef.nativeElement.querySelector('button')
                            if (first_button)
                            {
                                first_button.focus()
                                this.trap_focus = true
                            }
                        }
                        else
                        {
                            evt.preventDefault()
                        }
                    }
                    else if (evt?.key === 'Escape')
                    {
                        this.trap_focus = false
                        srcElement.focus()
                    }
                }
            })
        }
    }

    unfocus
    (
    )
    {
        this.show_search = false
        if (this.has_focus$)
            this.has_focus$.unsubscribe()
        this.has_focus$ = null
    }

    select
    (
        index : number,
        emit : boolean = true
    )
    {
        if (index < 0)
        {
            this.selected = -7
            this.option = undefined
            this._option = undefined
        }
        else
        {
            this.selected = index
            if (this._type.endsWith('[]'))
            {
                this.option = this.options[this.selected]
                this._option = this._options[this.selected]
            }
            else if (this._type.endsWith('{}') && !this.path)
            {
                this._option = this._options[this.selected]
                this.option = this.options[this._option]
            }
            else if (this._type.endsWith('{}') && this.path)
            {
                this.option = this.json.values(this.options)[this.selected]
                this._option = this._options[this.selected]
            }
        }
        if (emit && (this.option !== undefined || this.emitUndefined))
            this.optionChange.emit(this.option)
    }

    setOptions
    (
    )
    {
        if (this._type === 'str[]')
        {
            this._options = this.options
        }
        // else if (this._type.startsWith('str') && this._type.endsWith('{}'))
        // {

        // }
        else if (this._type.endsWith('[]') && this.path)
        {
            let options : any = []
            for (let o of this.options)
                options.push(this.json.pathToValue(o, this.path))
            this._options = options
        }
        else if (this._type.endsWith('{}') && !this.path)
        {
            this._options = this.json.keys(this.options)
        }
        else if (this._type.endsWith('{}') && this.path)
        {
            let options : any = []
            for (let o of this.json.values(this.options))
                options.push(this.json.pathToValue(o, this.path))
            this._options = options
        }
        this.filter()
    }

    filter
    (
    )
    {
        /*
        if (!this.searchEnabled || this.search.trim().length === 0)
        {
            this.__options = this._options
            return
        }
        this.__options = this._options.filter((opt: any)=> {
            return this.search.includes(opt) || opt.includes(this.search)
        })
        */
        if (!this.searchEnabled || this.search.trim().length === 0)
        {
            this.__options = Array.from(Array(this._options.length).keys())
            return
        }
        let options = []
        for (let i = 0; i < this._options.length; i++)
        {
            let opt = this._options[i]
            if (this.search.toLowerCase().includes(opt.toLowerCase()) || opt.toLowerCase().includes(this.search.toLowerCase()))
                options.push(i)
        }
        this.__options = options
    }

}