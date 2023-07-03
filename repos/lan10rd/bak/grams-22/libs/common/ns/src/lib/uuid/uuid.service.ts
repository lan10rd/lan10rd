import { Injectable } from '@nestjs/common'

@Injectable()
export class CommonNsUuidService
{

    uuid = require('uuid') // can do import * as uuid from 'uuid'

    NIL(){return this.uuid.NIL}
    parse(s: string){return this.uuid.parse(s)} // import { parse as uuidParse } from 'uuid'
    stringify(bytes: any){return this.uuid.stringify(bytes)}
    v1(){return this.uuid.v1()}
    v3(){return this.uuid.v3()} 
    v4(){return this.uuid.v4()}
    v5(){return this.uuid.v5()}
    validate(s:string){return this.uuid.validate(s)}
    version(){return this.uuid.version()}

}