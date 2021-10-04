import { Component, Input, ViewChild } from '@angular/core'

@Component
({
    selector: 'common-themes-materials-stars-element',
    templateUrl: './stars.element.html',
    styleUrls: ['./stars.element.scss']
})
export class CommonThemesMaterialsCssStarsElement
{

    _stars = 500
    @Input() set stars(num: number) {
        this._stars = num
        this.draw()
    }
    @ViewChild('space', {static: true}) space

    ngOnInit
    (
    )
    {
        this.draw()
    }

    async draw
    (
    )
    {
        let random, Y, X, Z, RY, RX, RZ, S, pos
        let concentration = 2000

        let newX = () => { return Math.floor((Math.random() * concentration) + 1) }
        let newY = () => { return Math.floor((Math.random() * concentration) + 1) }
        let newZ = () => { return Math.floor((Math.random() * concentration) + 1) }
        let newAngle = () => { return Math.floor((Math.random() * 360) + 1) }

        // this.space.nativeElement.textContent = ''
        // for (let i = 0; i < this._stars; i++)
        // {
        //     let div = document.createElement('div')
        //     div.classList.add('light')
            // Y = 'translateY(' + newY() + 'px) '
            // X = 'translateX(' + newX() + 'px) '
            // Z = 'translateZ(' + newZ() + 'px) '
            // RY = 'rotateY(' + newAngle() + 'deg)'
            // RX = 'rotateX(' + newAngle() + 'deg)'
            // RZ = 'rotateZ(' + newAngle() + 'deg)'
            // S = 'scale(' + Math.floor((Math.random() * 20) + 1) + ')'
            // div.style.transform = Y + X + Z + RY + RX + RZ
        //     this.space.nativeElement.appendChild(div)
        // }

        for (let child of this.space.nativeElement.children)
        {
            Y = 'translateY(' + newY() + 'px) '
            X = 'translateX(' + newX() + 'px) '
            Z = 'translateZ(' + newZ() + 'px) '
            RY = 'rotateY(' + newAngle() + 'deg)'
            RX = 'rotateX(' + newAngle() + 'deg)'
            RZ = 'rotateZ(' + newAngle() + 'deg)'
            S = 'scale(' + Math.floor((Math.random() * 20) + 1) + ')'
            child.style.transform = Y + X + Z + RY + RX + RZ
        }

        // $('#scale').click(function(event) {
        //     $('#space').css('transfom', 'scale(5)');
        // });
    }

}