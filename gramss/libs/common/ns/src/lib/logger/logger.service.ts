import { Injectable, Logger } from '@nestjs/common'
import { Z_ERRNO } from 'node:zlib'

import { CommonNsJsonService } from '../json/json.service'

@Injectable()
export class CommonNsLoggerService
{

    logger = new Logger()

    constructor ( public json: CommonNsJsonService ) {  }

    clazz() { return (new Error()).stack.split('\n')[3].split('.')[0].split('at ').join('').trim() }
    map(message){ return message.map(arg => this.json.stringify(arg, 4)).join(' ') }

    log(...message) { this.logger.log(this.map(message), this.clazz()) }
    error( err, message?: string) { this.logger.error(message || err.message, err.stack, this.clazz()) }
    warn(...message) { this.logger.warn(this.map(message), this.clazz()) }
    debug(...message) { this.logger.debug(this.map(message), this.clazz()) }
    verbose(...message) { this.logger.verbose(this.map(message), this.clazz()) }

}