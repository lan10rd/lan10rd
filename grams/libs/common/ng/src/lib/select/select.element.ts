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
    // encapsulation: ViewEncapsulation.None commented out on 12/13/21 not sure why it as here
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
    @Input() big_threshold : number = 77

    @ViewChild('bigScrollElement', {static: false}) bigScrollElement: any
    @ViewChildren('buttons') buttons : any
    @ViewChild('scrollElement', {static: false}) scrollElement: any

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
        console.log('changes', changes)
        // i think i read somewhere you dont have to do set time out if you mark dirty or something
        setTimeout(() => {
            if ('options' in changes)
            {
                
                /* determine type of all objects in options by examining the first */
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

                // took this out, not sure it's really necessary unless the selected index is not in the list
                if (!changes.options.firstChange)
                { 
                    // this was done to reset select if options change but it then had to do dont emit undefined for one of the particular usages, sooo
                    /* try to find index if option is already selected*/
                    if (this.selected > this.__options.length || this.__options.length === 0)
                    {
                        this.select(-7)
                    }
                }

                /* big mode */
                if (this.options?.length >= this.big_threshold)
                    this.big = true
                else
                    this.big = false

                /* try to initialize   */
                // && changes.options.firstChange // seems to cause issues
                if ( this.json.isDefined(this.initial) && !this.option && this._options?.length > 0 )
                {
                    let type = this.json.typeOf(this.initial)
                    if (type === 'boo')
                        this.select(0)
                    else if (type === 'num')
                    {
                        this.select(this.initial)
                    }
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

    async cycleBig
    (
        $event: any,
        scroller: any,
        button: any,
        x_button_i: number,
        next_focus: number
    )
    {
        let buttons: any
        if (next_focus === 0)
        {
            scroller.elementRef.nativeElement.scrollTo({left: 0, behavior: 'instant'})
        }
        else if (next_focus === this.__options.length - 1)
        {
            scroller.elementRef.nativeElement.scrollTo({left: scroller.elementRef.nativeElement.scrollWidth, behavior: 'instant'})
        }
        let find_button = async () => {
            await new Promise((resolve) => {
                setTimeout(()=> {
                    resolve(true)
                }, 0)
            })
            buttons = scroller?.elementRef?.nativeElement?.querySelectorAll('button')
            let find: any
            for (let btn of buttons)
            {
                if (+btn.attributes['x-button-i'].value === next_focus)
                {
                    find = btn
                    break
                }
            }
            if (find)
            {
                return find
            }
            if (next_focus > x_button_i)
                scroller.elementRef.nativeElement.scrollBy({left: 24, behavior: 'instant'})
            else if (x_button_i)
                scroller.elementRef.nativeElement.scrollBy({left: -24, behavior: 'instant'})
        }
        let find: any
        while (!find)
        {
            find = await find_button()
        }
        // if (find)
            return find.focus()
    }

    async cycleButton
    (
        $event: any,
        scroller: any,
        button: any,
        bigScroll: boolean = false
    )
    {
        let x_button_i = +button.attributes['x-button-i'].value
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
              
            if (bigScroll)
                return this.cycleBig($event, scroller, button, x_button_i, next_focus)
            let buttons: any
            buttons = scroller?.child?.nativeElement?.querySelectorAll('button')
            let next_button = buttons[next_focus]
            return next_button.focus()
        }
        else if ($event?.key === 'Enter')
        {
            // console.log('enter')
        }
    }

    async buttonFocus
    (
        i: number,
        $event: any,
        button: any,
        big : boolean = false
    )
    {
        let new_focus = big ? +button.attributes['x-button-i'].value : i 
        this.focused_button = new_focus
        // button.focus()
    }

    async focus
    (
        wrapper: any,
        scroller: any,
        $event: any,
        extra?: any
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
        if (index < 0 || this.selected === index)
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

    deselect(){this.select(-7)}

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