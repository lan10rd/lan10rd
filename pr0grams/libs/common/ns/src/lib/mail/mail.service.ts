import { Injectable, Inject, Optional } from '@nestjs/common'

@Injectable()
export class CommonNsMailService
{
    nodemailer = require('nodemailer')
    transporters: any = {}

    constructor
    (
        @Optional() @Inject('COMMON_MAILER_SERVICE_CONFIG') public config: any
    )
    {

    }

    async onApplicationBootstrap
    (
    )
    {
        if (this.config && this.config.transporters)
            this.createTransporters(this.config.transporters)
    }

    async createTransporters
    (
        transporters: {
                host: string,
                port: number,
                secure: boolean,
                pool: boolean,
                auth: {
                    user: string,
                    pass: string
                }
        }[]
    )
    {
        for (let transporter of transporters)
        {
            this.transporters[transporter.auth.user] = this.createTransporter
                (
                    transporter.host,
                    transporter.port,
                    transporter.secure,
                    transporter.pool,
                    transporter.auth.user,
                    transporter.auth.pass
                )
        }
    }

    createTransporter
    (
        host: string,
        port: number,
        secure: boolean,
        pool: boolean,
        user: string,
        pass: string
    )
    {
        return this.nodemailer.createTransport
            ({
                host,
                port,
                secure,
                pool,
                auth: {
                    user,
                    pass
                }
            })
    }

    async send
    (
        transport: string,
        from: string,
        to: string[],
        subject: string,
        text: string,
        html?: string
    )
    {
        try
        {
            return await this.transporters[transport].sendMail({from, to, subject, text, html })
        }
        catch(e)
        {
            throw new Error(e)
        }
    }

    embedHtml
    (
        text: string
    )
    {
        return text
    }

}