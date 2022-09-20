import { Component, Input, Output, EventEmitter, ChangeDetectorRef, ChangeDetectionStrategy, ViewEncapsulation, ViewChild } from '@angular/core'
// import { fromEvent } from 'rxjs'

@Component
({
    selector : 'common-ng-video-element',
    templateUrl : './video.element.html',
    styleUrls : ['./video.element.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommonNgVideoElement
{

    @Input() src : any
    @Input() type : string = 'video/mp4'
    @Input() no_support : string = 'Your browser does not support the audio tag.'

    @ViewChild('child') child : any
    @ViewChild('sourceChild') sourceChild : any

    _playing : boolean = false
    // playing$ : any

    /* attributes */
    @Input() controls : boolean = true
    @Input() autoplay : boolean = false
    // @Input() autopictureinpicture : boolean = false
    // @Input() disablepictureinpicture : boolean = false
    @Input() loop : boolean = false
    // @Input() crossorigin : 'anonymous' | 'use-credentials' = 'anonymous'
    @Input() muted : boolean = false
    @Input() preload : 'none' | 'metadata' | 'auto' = 'auto'
    @Input() poster : any

    /* events */
    @Output('audioprocess')	audioprocess = new EventEmitter()
    @Output('canplay') canplay = new EventEmitter()
    @Output('canplaythrough') canplaythrough = new EventEmitter()
    @Output('complete') complete = new EventEmitter()
    @Output('durationchange') durationchange = new EventEmitter()
    @Output('emptied') emptied = new EventEmitter()
    @Output('ended') ended = new EventEmitter()
    @Output('loadeddata') loadeddata = new EventEmitter()
    @Output('loadedmetadata') loadedmetadata = new EventEmitter()
    @Output('pause') pause = new EventEmitter()
    @Output('play') play = new EventEmitter()
    @Output('playing') playing = new EventEmitter()
    @Output('ratechange') ratechange = new EventEmitter()
    @Output('seeked') seeked = new EventEmitter()
    @Output('seeking') seeking = new EventEmitter()
    @Output('stalled') stalled = new EventEmitter()
    @Output('suspend') suspend = new EventEmitter()
    @Output('timeupdate') timeupdate = new EventEmitter()
    @Output('volumechange') volumechange = new EventEmitter()
    @Output('waiting') waiting = new EventEmitter()

    ngOnChanges
    (
        changes: any
    )
    {
        if (this.child)
        {
            this.child.nativeElement.load()
            if (this._playing)
            {
                this.child.nativeElement.play()
                // if (this.playing$)
                // {
                //     this.playing$.unsubscribe()
                //     this.playing$ = null
                // }
                // this.playing$ = fromEvent(this.videoChild.nativeElement, 'canplaythrough').subscribe((data: any)=> {
                //     console.log('canplaythrough')
                //     this.videoChild.nativeElement.play()
                //     this.playing$.unsubscribe()
                //     this.playing$ = null
                // })
            }
        }
    }

}