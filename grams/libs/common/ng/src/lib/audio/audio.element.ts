import { Component, Input, Output, EventEmitter, ChangeDetectorRef, ViewEncapsulation, ChangeDetectionStrategy, ViewChild } from '@angular/core'

@Component
({
    selector : 'common-ng-audio-element',
    templateUrl : './audio.element.html',
    styleUrls : ['./audio.element.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommonNgAudioElement
{

    @Input() src : any
    @Input() type : string = 'audio/mp3'
    @Input() no_support : string = 'Your browser does not support the audio tag.'

    @ViewChild('child') child : any
    @ViewChild('sourceChild') sourceChild : any

    @Input('_playing') _playing : boolean = false
    // @Output() _playingChange : any = new EventEmitter()

    /* attributes */
    @Input() controls : boolean = true
    @Input() autoplay : boolean = false
    @Input() loop : boolean = false
    // @Input() crossorigin : 'anonymous' | 'use-credentials' = 'anonymous'
    @Input() muted : boolean = false
    @Input() preload : 'none' | 'metadata' | 'auto' = 'auto'

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
                this.child.nativeElement.play()
        }
    }

}