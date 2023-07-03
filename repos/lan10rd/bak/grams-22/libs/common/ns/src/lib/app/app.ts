import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'

import * as helmet from 'helmet'
import * as cors from 'cors'
import * as csurf from 'csurf'
import * as cookieParser from 'cookie-parser'
import * as compression from 'compression'

export const app: any = {
    bootstrap: async (AppModule, options: any = {}) => {
        
        /* instantiate */
        let app = await NestFactory.create(AppModule)

        /* deploy */
        let globalPrefix = options.globalPrefix ? options.globalPrefix : ''
        app.setGlobalPrefix(globalPrefix)
        const port = process.env.PORT || 3000
        if (!('enableShutdownHooks' in options) || options.enableShutdownHooks)
            app.enableShutdownHooks()

        /* performance */
        app.use('compression' in options ? compression(options.compression) : compression())

        /* security */
        app.use('helmet' in options ? helmet(options.helmet) : helmet())
        app.use('cookieParser' in options ? cookieParser(options.cookieParser) : cookieParser())
        if ('cors' in options)
            app.use(cors(options.cors))
        if ('csurf' in options)
        {
            /* sometimes we want to bypass, csurf is for ui requests, but you may want to allow others */
            let surf = csurf(options.csurf)
            if ('csurfUse' in options)
            {
                app.use(async (req, res, next) => {
                    if (await options.csurfUse(req))
                        surf(req, res, next) // return surf(req, res, next)
                    else
                        next()
                })
            }
            else
                app.use(surf)
        }

        /* extra uses */
        if ('uses' in options)
            await options.uses(app)
        
        /* start */
        await app.listen(port, () => {
            Logger.log('Listening at http://localhost:' + port + '/' + globalPrefix)
        })

    }
}