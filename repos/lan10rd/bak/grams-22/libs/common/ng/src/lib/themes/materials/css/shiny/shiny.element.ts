import { Component, Input } from '@angular/core'

@Component
({
    selector: 'common-themes-materials-shiny-element',
    templateUrl: './shiny.element.html',
    styleUrls: ['./shiny.element.scss']
})
export class CommonThemesMaterialsCssShinyElement
{

    /* this is a workaround as i had trouble getting ngOnChanges to be triggered through the dynamic element */
    _stars = 50
    @Input() set stars(value: number)
    {
        console.log('stars!', value)
        this._stars = value
        this.draw()
    }
    @Input() sparkle = 20

    ngOnInit
    (
    )
    {
        this.draw()
    }

    ngOnChanges
    (
        changes
    )
    {
        console.log('shiny changes!', changes)
        // this.draw()
    }

    async draw
    (
    )
    {
        let body = document.querySelector('#starshine'),
            template = document.querySelector('#shiny'),
            templateReverse = document.querySelector('#shiny-reverse'),
            stars = this._stars,
            sparkle = this.sparkle
        body.textContent = ''
        let size = 'xxsmall'
        let createStar = async () => {
            let clone = template.cloneNode() as HTMLElement
            clone.removeAttribute('id')
            clone.style.top = (Math.random() * 100) + '%'
            clone.style.left = (Math.random() * 100) + '%'
            clone.style.webkitAnimationDelay = (Math.random() * sparkle) + 's'
            // clone.style.animationDelay = (Math.random() * sparkle) + 's'
            // clone.style.mozAnimationDelay = (Math.random() * sparkle) + 's'
            clone.classList.add(size)
            body.appendChild(clone)
        }

        let createStarReverse = async () => {
            let clone = templateReverse.cloneNode() as HTMLElement
            clone.removeAttribute('id')
            clone.style.top = (Math.random() * 100) + '%'
            clone.style.left = (Math.random() * 100) + '%'
            clone.style.webkitAnimationDelay = (Math.random() * sparkle) + 's'
            // clone.style.animationDelay = (Math.random() * sparkle) + 's'
            // clone.style.mozAnimationDelay = (Math.random() * sparkle) + 's'
            clone.classList.add(size)
            body.appendChild(clone)
        }
     
        for (let i = 0; i < stars; i++)
        {
            if (i % 2 === 0)
                size = 'small'
            else if (i % 3 === 0)
                size = 'xsmall'
            else if (i % 4 === 0)
                size = 'xxsmall'
            else
                size = 'medium'
            // else
            //     size = 'large'
            
            if (i % 2 === 0)
                createStar()
            else
                createStarReverse()
        }
    }

}