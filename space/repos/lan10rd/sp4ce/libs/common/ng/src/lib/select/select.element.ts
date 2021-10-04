import { Component, Input, Output, EventEmitter, ViewChild, ChangeDetectorRef, ViewEncapsulation } from '@angular/core'
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
    @Input() searchEnabledSize : number = 10
    @Input() search : string = ''
    @Output() searchChange : any= new EventEmitter()

    @Input() scrollClasses : any
    @Input() scrollStyles : any
    @Input() buttonClasses : any
    @Input() buttonStyles : any
    @Input() color : string = 'white' // TODO: get color using style service or something to inspect value of color in glo-0-text class

    @Input() emitUndefined : boolean = true

    @Input() height : any = '3.25rem'
    @Input() big : any = false
    @Input() big_threshold : number = 50

    show_search : boolean = false
    has_focus : boolean = false
    has_focus$ : any

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

    async hasFocus
    (
        wrapper: any,
        $event: any
    )
    {
        if (this.searchEnabled && !this.has_focus$ && this.options.length >= this.searchEnabledSize)
        {
            this.show_search = true
            this.has_focus$ = merge
            (
                fromEvent(this.document.document.documentElement, 'mousedown'),
                fromEvent(this.document.document.documentElement, 'touchstart')
            ).subscribe((data: any)=>{
                if (data.composedPath().indexOf( wrapper ) === -1)
                {
                    this.show_search = false
                    this.has_focus$.unsubscribe()
                    this.has_focus$ = null
                }
            })
        }
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


    // would like to try looping scroll at some point
//js
/*
var doc = window.document,
  context = doc.querySelector('.js-loop'),
  clones = context.querySelectorAll('.is-clone'),
  disableScroll = false,
  scrollHeight = 0,
  scrollPos = 0,
  clonesHeight = 0,
  i = 0;

function getScrollPos () {
  return (context.pageYOffset || context.scrollTop) - (context.clientTop || 0);
}

function setScrollPos (pos) {
  context.scrollTop = pos;
}

function getClonesHeight () {
  clonesHeight = 0;

  for (i = 0; i < clones.length; i += 1) {
    clonesHeight = clonesHeight + clones[i].offsetHeight;
  }

  return clonesHeight;
}

function reCalc () {
  scrollPos = getScrollPos();
  scrollHeight = context.scrollHeight;
  clonesHeight = getClonesHeight();

  if (scrollPos <= 0) {
    setScrollPos(1); // Scroll 1 pixel to allow upwards scrolling
  }
}

function scrollUpdate () {
  if (!disableScroll) {
    scrollPos = getScrollPos();

    if (clonesHeight + scrollPos >= scrollHeight) {
      // Scroll to the top when you’ve reached the bottom
      setScrollPos(1); // Scroll down 1 pixel to allow upwards scrolling
      disableScroll = true;
    } else if (scrollPos <= 0) {
      // Scroll to the bottom when you reach the top
      setScrollPos(scrollHeight - clonesHeight);
      disableScroll = true;
    }
  }

  if (disableScroll) {
    // Disable scroll-jumping for a short time to avoid flickering
    window.setTimeout(function () {
      disableScroll = false;
    }, 40);
  }
}

function init () {
  reCalc();
  
  context.addEventListener('scroll', function () {
    window.requestAnimationFrame(scrollUpdate);
  }, false);

  window.addEventListener('resize', function () {
    window.requestAnimationFrame(reCalc);
  }, false);
}

if (document.readyState !== 'loading') {
  init()
} else {
  doc.addEventListener('DOMContentLoaded', init, false)
}








// Just for this demo: Center the middle block on page load
window.onload = function () {
  setScrollPos(Math.round(clones[0].getBoundingClientRect().top + getScrollPos() - (context.offsetHeight - clones[0].offsetHeight) / 2));
};
*/
//scss
/*
html,
body {
  height: 100%;
  overflow: hidden;
}

.Loop {
  position: relative;
  height: 100%;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}

section {
  position: relative;
  text-align: center;
  min-height: 300px;
  max-height: 700px;
  height: 80%;
}

::scrollbar {
  display: none;
}



*/
//html
/*
<main class="Loop js-loop">
  <section class="one">
    <h1>One</h1>
  </section>
  <section class="two">
    <h1>For</h1>
  </section>
  <section class="three">
    <h1>All</h1>
  </section>
  <section class="four">
    <h1>And</h1>
  </section>
  <section class="three">
    <h1>All</h1>
  </section>
  <section class="two">
    <h1>For</h1>
  </section>

  <!--
  These blocks are the same as the first blocks to get that looping illusion going.
  You need to add clones to fill out a full viewport height.
  -->
  <section class="one is-clone">
    <h1>One</h1>
  </section>
  <section class="two is-clone">
    <h1>For</h1>
  </section>
</main>

    */





 // even big seems to cap out because of the browsers max px, so at somepoint implement this:
 //js
    /*
Visual representation of the approach:

--------
   --------
      --------
         --------
            --------
               --------
                  --------
                     --------
                        --------
                           --------
                              --------
                                 --------
                                    --------
                                       --------
                                          --------

==================================================

[=] - real scrollable height (h)
[-] - "pages";  total height of all (n) pages is (th) = (ph) * (n)

The overlap between pages is (cj) and is the distance the scrollbar
will jump when we adjust the scroll position during page switch.

To keep things smooth, we need to minimize both (n) and (cj).
Setting (ph) at 1/100 of (h) is a good start.
*/
/*
var items = calcMaxBrowserScrollSize();
var itemSize = 50;
var th = items * itemSize; // virtual height
var h = calcMaxBrowserScrollSize(); // real scrollable height
var ph = h / 100; // page height
var n = Math.ceil(th / ph); // number of pages
var vp = 400; // viewport height
var rh = 50; // row height
var cj = (th - h) / (n - 1) > 0 ? (th - h) / (n - 1) : 1; // "jumpiness" coefficient

var page = 0; // current page
var offset = 0; // current page offset
var prevScrollTop = 0;

var rows = {}; // cached row nodes

var viewport, content;

$(function() {
  viewport = $("#viewport");
  content = $("#content");
  h = h > th ? th : h;
  viewport.css("height", vp);
  content.css("height", h);

  viewport.scroll(onScroll);
  viewport.trigger("scroll");
  setTimeout(function() {
    scrollToItem(17685);
  }, 6000);
});

function onScroll() {
  var scrollTop = viewport.scrollTop();

  if (Math.abs(scrollTop - prevScrollTop) > vp) onJump();
  else onNearScroll();

  renderViewport();

  logDebugInfo();
}

function onNearScroll() {
  var scrollTop = viewport.scrollTop();

  // next page
  if (scrollTop + offset > (page + 1) * ph) {
    page++;
    offset = Math.round(page * cj);
    viewport.scrollTop((prevScrollTop = scrollTop - cj));
    removeAllRows();
  } else if (scrollTop + offset < page * ph) {
    // prev page
    page--;
    offset = Math.round(page * cj);
    viewport.scrollTop((prevScrollTop = scrollTop + cj));
    removeAllRows();
  } else prevScrollTop = scrollTop;
}

function onJump() {
  var scrollTop = viewport.scrollTop();
  page = Math.floor(scrollTop * ((th - vp) / (h - vp)) * (1 / ph));
  offset = Math.round(page * cj);
  prevScrollTop = scrollTop;

  removeAllRows();
}

function removeAllRows() {
  for (var i in rows) {
    rows[i].remove();
    delete rows[i];
  }
}

function calcMaxBrowserScrollSize(horz) {
  const div = document.createElement("div");
  const style = div.style;
  style.position = "absolute";
  style.left = "99999999999999px";
  style.top = "9999999999999999px";
  document.body.appendChild(div);

  const size = div.getBoundingClientRect()[horz ? "left" : "top"];
  document.body.removeChild(div);
  return Math.abs(size);
}

function renderViewport() {
  // calculate the viewport + buffer
  var y = viewport.scrollTop() + offset,
    buffer = vp,
    top = Math.floor((y - buffer) / rh),
    bottom = Math.ceil((y + vp + buffer) / rh);

  top = Math.max(0, top);
  bottom = Math.min(th / rh, bottom);

  // remove rows no longer in the viewport
  for (var i in rows) {
    if (i < top || i > bottom) {
      rows[i].remove();
      delete rows[i];
    }
  }

  // add new rows
  for (var i = top; i <= bottom; i++) {
    if (!rows[i]) rows[i] = renderRow(i);
  }
}

function renderRow(row) {
  return $("<div class='row' />")
    .css({
      top: row * rh - offset,
      height: rh
    })
    .text("row " + (row + 1))
    .appendTo(viewport);
}

function scrollToItem(index) {
  var virtualPos = (index - 1) * itemSize;
  page = Math.floor(virtualPos / ph);
  offset = Math.round(page * cj);
  //tween(prevScrollTop, virtualPos - offset, 750);
  viewport.scrollTop(prevScrollTop = virtualPos - offset);
}

function tween(start, end, duration, easing) {
  var delta = end - start;
  var startTime;
  if (window.performance && window.performance.now) {
    startTime = performance.now();
  } else if (Date.now) {
    startTime = Date.now();
  } else {
    startTime = new Date().getTime();
  }
  var tweenLoop = function(time) {
    var t = !time ? 0 : time - startTime;
    var factor = easeInOutQuad(null, t, 0, 1, duration);
    viewport.scrollTop((prevScrollTop = start + delta * factor));
    if (t < duration && viewport.scrollTop() != end)
      requestAnimationFrame(tweenLoop);
  };
  tweenLoop();
}

function easeInOutQuad(x, t, b, c, d) {
  if ((t /= d / 2) < 1) return c / 2 * t * t + b;
  return -c / 2 * (--t * (t - 2) - 1) + b;
}

function logDebugInfo() {
  var dbg = $("#debug");
  dbg.empty();
  dbg.append("n = " + n + "<br>");
  dbg.append("ph = " + ph + "<br>");
  dbg.append("cj = " + cj + "<br>");
  dbg.append("<hr>");
  dbg.append("page = " + page + "<br>");
  dbg.append("offset = " + offset + "<br>");
  dbg.append("virtual y = " + (prevScrollTop + offset) + "<br>");
  dbg.append("real y = " + prevScrollTop + "<br>");
  dbg.append("rows in the DOM = " + $(".row").length + "<br>");
}

    */
//scss
/*
HTML CSS JSResult Skip Results Iframe
EDIT ON
#debug {
    margin-left: 400px;
    width: 200px;
    background: beige;
    font-size: 9pt;
    opacity: 0.5;
    border: 1px solid gray;
    padding: 10px;
}

#viewport {
    float: left;
    position: relative;
    border: 1px solid black;
    overflow: auto;
    width: 350px;
}

#content {
    position: relative;
    overflow: hidden;
  width: 1px;
}

.row {
    position: absolute;
    left: 0px;
    width: 100%;
    border-bottom: 1px dotted blue;
    font-size: 9pt;
}

.row:hover {
    background: rgba(0,0,255,0.05);
}
*/

//html
/*
<div id="viewport">
    <div id="content"></div>
</div>

<div id="debug"></div>
*/


}