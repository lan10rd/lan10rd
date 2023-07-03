import { Component, ViewChild } from '@angular/core'

class firefly{
    x
    y
    s
    ang
    v
    c
    constructor(c, w, h){
        this.c = c
        this.x = Math.random()*w;
        this.y = Math.random()*h;
        this.s = Math.random()*2;
        this.ang = Math.random()*2*Math.PI;
        this.v = this.s*this.s/4;
    }
    move(){
        this.x += this.v*Math.cos(this.ang);
        this.y += this.v*Math.sin(this.ang);
        this.ang += Math.random()*20*Math.PI/180-10*Math.PI/180;
    }
    show(){
        this.c.beginPath();
        this.c.arc(this.x,this.y,this.s,0,2*Math.PI);
        this.c.fillStyle="#fddba3";
        this.c.fill();
    }
}

@Component
({
    selector: 'common-themes-materials-canvas-fireflies-element',
    templateUrl: './fireflies.element.html',
    styleUrls: ['./fireflies.element.scss']
})
export class CommonThemesMaterialsCanvasFirefliesElement
{

    @ViewChild('canvas', {static: true}) canvas
    c
    w
    h

    ngOnInit
    (
    )
    {
        let canvas = this.canvas.nativeElement
        this.c = this.init()
        this.w = (canvas.width = window.innerWidth)
        this.h = (canvas.height = window.innerHeight)
        let c = this.c,
        w = this.w,
        h = this.h;
        //initiation
        let f = [];

        function draw() {
            if(f.length < 100){
                for(let j = 0; j < 10; j++){
                    f.push(new firefly(c, w, h));
                }
            }
            //animation
            for(let i = 0; i < f.length; i++){
                f[i].move();
                f[i].show();
                if(f[i].x < 0 || f[i].x > w || f[i].y < 0 || f[i].y > h){
                f.splice(i,1);
                }
            }
        }

        let mouse: any = {};
        let last_mouse: any = {};

        canvas.addEventListener(
            "mousemove",
            function(e) {
                last_mouse.x = mouse.x;
                last_mouse.y = mouse.y;

                mouse.x = e.pageX - this.offsetLeft;
                mouse.y = e.pageY - this.offsetTop;
            },
            false
        );

        window['requestAnimFrame'] = (function() {
            return (
                window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window['mozRequestAnimationFrame'] ||
                window['oRequestAnimationFrame'] ||
                window['msRequestAnimationFrame'] ||
                function(callback) {
                window.setTimeout(callback);
                }
            );
        });

        function loop() {
            window['requestAnimFrame'](loop);
            c.clearRect(0, 0, w, h);
            draw();
        }

        window.addEventListener("resize", function() {
            (w = canvas.width = window.innerWidth),
            (h = canvas.height = window.innerHeight);
            loop();
        });

        loop();
        setInterval(loop, 1000 / 60);

    }

    init() {
        let canvas = this.canvas.nativeElement
        this.c = canvas.getContext("2d"),
        this.w = (canvas.width = window.innerWidth),
        this.h = (canvas.height = window.innerHeight);
        this.c.fillStyle = "rgba(30,30,30,1)";
        this.c.fillRect(0, 0, this.w, this.h);
        return this.c;
    }

}