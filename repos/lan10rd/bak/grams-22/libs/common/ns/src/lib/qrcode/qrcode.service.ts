import { Injectable } from '@nestjs/common'

@Injectable()
export class CommonNsQrcodeService
{

    qrcode = require('qrcode')

    async toDataURL
    (
        otpauth
    )
    {
        return new Promise((resolve, reject) => {
            this.qrcode.toDataURL(otpauth, (err, data_url) => {
                if (err)
                    return reject(err)
                return resolve(data_url)
            })
        })
    }

}