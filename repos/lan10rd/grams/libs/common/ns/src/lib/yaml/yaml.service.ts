import { Injectable } from '@nestjs/common'

import { CommonNsFilesService } from '../files/files.service'

@Injectable()
export class CommonNsYamlService
{

    yaml = require('js-yaml')

    constructor
    (
        public files: CommonNsFilesService
    )
    {

    }

    async load
    (
        yaml_string: any,
        options?
    )
    {
        return this.yaml.load(yaml_string, options)
    }
    
    async loadFile
    (
        path: string,
        options?
    )
    {
        return this.load(await this.files.read(path), options)
    }

    async dump
    (
        yaml_object,
        options?
    )
    {
        return this.yaml.dump(yaml_object, options)
    }

}