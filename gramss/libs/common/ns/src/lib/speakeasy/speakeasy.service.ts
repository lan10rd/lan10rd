import { Injectable } from '@nestjs/common'

import { CommonNsQrcodeService } from '../qrcode/qrcode.service'

@Injectable()
export class CommonNsSpeakeasyService
{

    speakeasy = require('speakeasy')

    constructor
    (
        public qrcode: CommonNsQrcodeService
    )
    {

    }

    generateSecret
    (
        options?: any
    )
    {
        return this.speakeasy.generateSecret
            (
                options
            )
    }

    generateNameSecret
    (
        name: string
    )
    {
        return this.speakeasy.generateSecret
            ({
                name: name,
                otpauth_url: true
            })
    }

    otpauthURL
    (
        secret: string,
        encoding: string,
        label: string,
        issuer: string,
        algorithm: string
    )
    {
        return this.speakeasy.otpauthURL
            ({
                secret: secret,
                encoding:encoding,
                type: 'totp',
                label: label,
                issuer: issuer,
                algorithm: algorithm
            })
    }

    base32
    (
        secret
    )
    {
        return secret.base32
    }

    verify
    (
        base32Secret,
        token
    )
    {
        return this.speakeasy.totp.verify
        ({
            secret: base32Secret,
            encoding: 'base32',
            token: token
        })
    }

    timeToken
    (
        base32Secret,
        seconds?: number
    )
    {
        return seconds ?
        this.speakeasy.totp
        ({
            secret: base32Secret,
            encoding: 'base32',
            time: seconds
        })
        :
        this.speakeasy.totp
        ({
            secret: base32Secret,
            encoding: 'base32'
        })
    }

    verifyTimeToken
    (
        base32Secret,
        token,
        window: number
    )
    {
        return this.speakeasy.totp.verify
            ({
                secret: base32Secret,
                encoding: 'base32',
                token: token,
                window: window
            })
    }

    verifyTimeTokenStep
    (
        base32Secret,
        token,
        window: number,
        step: number
    )
    {
        return this.speakeasy.totp.verifyDelta
        ({
            secret: base32Secret,
            encoding: 'base32',
            token: token,
            window: window,
            step: step
        })
    }

    counterToken
    (
        base32Secret,
        counter: number
    )
    {
        return this.speakeasy.hotp
        ({
            secret: base32Secret,
            encoding: 'base32',
            counter: counter
        })
    }

    verifyCounterToken
    (
        base32Secret,
        token,
        counter
    )
    {
        return this.speakeasy.hotp.verify
        ({
            secret: base32Secret,
            encoding: 'base32',
            token: token,
            counter: counter
        })
    }

}