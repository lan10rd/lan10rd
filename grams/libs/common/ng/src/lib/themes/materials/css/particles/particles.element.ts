import { Component, Input } from '@angular/core'

import { CommonMathService } from '../../../../math/math.service'
import { CommonStylesService } from '../../../../styles/styles.service'

@Component
({
    selector: 'common-themes-materials-particles-element', 
    templateUrl: './particles.element.html',
    styleUrls: ['./particles.element.scss']
})
export class CommonThemesMaterialsCssParticlesElement
{

    @Input() options

    constructor
    (
        public math: CommonMathService,
        public styles: CommonStylesService
    )
    {

    }

    ngOnInit
    (
    )
    {
        this.setStyle(this.options)
    }

    ngOnDestroy
    (
    )
    {
        this.styles.removeGlobal('CommonThemesCuratorMaterialsParticlesStyle')
    }

    setStyle
    (
        options?: any
    )
    {
        let uno = options && 'particle1' in options ? options.particle1 : {speed: 170, size: 1, color: 'rgb(255, 255, 255)', amount: 1000}
        let dos = options && 'particle2' in options ? options.particle2 : {speed: 270, size: 1, color: 'rgb(255, 255, 255)', amount: 500}
        let tres = options && 'particle3' in options ? options.particle3 : {speed: 420, size: 2, color: 'rgb(255, 255, 255)', amount: 250}
        let quatro = options && 'particle4' in options ? options.particle4 : {speed: 1200, size: 2, color: 'rgb(255, 255, 255)', amount: 125}
        this.styles.addGlobal
        (
            `
                .particle-1{-webkit-animation:animParticle ` + uno.speed + `s linear infinite;animation:animParticle ` + uno.speed + `s linear infinite;box-shadow:0 0 ` + uno.color + this.randomBorderShadow(uno.amount, uno.color) + `;height:` + uno.size + `px;width:` + uno.size + `px}
                .particle-1:after{box-shadow:0 0 ` + uno.color + this.randomBorderShadow(uno.amount, uno.color) + `;height:` + uno.size + `px;width:` + uno.size + `px}
                .particle-2{-webkit-animation:animParticle ` + dos.speed + `s linear infinite;animation:animParticle ` + dos.speed + `s linear infinite;box-shadow:0 0 ` + dos.color + this.randomBorderShadow(dos.amount, dos.color) + `;height:` + dos.size + `px;width:` + dos.size + `px}
                .particle-2:after{box-shadow:0 0 ` + dos.color + this.randomBorderShadow(dos.amount, dos.color) + `;height:` + dos.size + `px;width:` + dos.size + `px}
                .particle-3{-webkit-animation:animParticle ` + tres.speed + `s linear infinite;animation:animParticle ` + tres.speed + `s linear infinite;box-shadow:0 0 ` + tres.color + this.randomBorderShadow(tres.amount, tres.color) + `;height:` + tres.size + `px;width:` + tres.size + `px}
                .particle-3:after{box-shadow:0 0 ` + tres.color + this.randomBorderShadow(tres.amount, tres.color) + `;height:` + tres.size + `px;width:` + tres.size + `px}
                .particle-4{-webkit-animation:animParticle ` + quatro.speed + `s linear infinite;animation:animParticle ` + quatro.speed + `s linear infinite;box-shadow:0 0 ` + quatro.color + this.randomBorderShadow(quatro.amount, quatro.color) + `;height:` + quatro.size + `px;width:` + quatro.size + `px}
                .particle-4:after{box-shadow:0 0 ` + quatro.color + this.randomBorderShadow(quatro.amount, quatro.color) + `;height:` + quatro.size + `px;width:` + quatro.size + `px}
            `,
            'CommonThemesCuratorMaterialsParticlesStyle'
        )
    }

    getRandomInt
    (
        max
    )
    {
        return Math.floor(Math.random() * Math.floor(max))
    }

    randomBorderShadow
    (
        particles: number,
        color: string
    )
    {
        let shadow = ''
        for (let p = 0; p < particles; p++) 
            shadow += ',' + this.math.pseudoRandomInt(2560) + 'px ' + this.math.pseudoRandomInt(2560) + 'px ' + color
        return shadow
    }

}