import { Injectable } from '@nestjs/common'

@Injectable()
export class CommonNsOsService
{

    os = require('os')

}