import { Injectable } from '@nestjs/common'
// import { Injectable, StreamableFile } from '@nestjs/common'

import { promises as fs } from 'fs' // could do fs.promises instead!
import * as fse from 'fs-extra'
import * as path from 'path'

import * as multer from 'multer'
import * as busboy from 'busboy'

@Injectable()
export class CommonNsFilesService
{

    fs = fs
    fse = fse
    path = path
    multer = multer
    busboy = busboy

    async exists
    (
        path: string
    ) 
    {
        try
        {
            await fs.access(path)
            return true
        }
        catch(e)
        {
            return false
        }
    }

    async stat
    (
        path : string
    )
    {
        let sta = await fs.stat(path)
        return {stat: sta, isFile : sta.isFile(), isDirectory : sta.isDirectory()}
    }

    /*
    function copy() {
        var readStream = fs.createReadStream(oldPath);
        var writeStream = fs.createWriteStream(newPath);

        readStream.on('error', callback);
        writeStream.on('error', callback);

        readStream.on('close', function () {
            fs.unlink(oldPath, callback);
        });

        readStream.pipe(writeStream);
    }
    */

    async copy
    (
        from : string,
        to : string
    )
    {
        if (await this.exists(to))
            throw new Error('new path already exists!')
        if (!(await this.exists(from)))
            throw new Error('current path doest not exist!')
        return await this.fse.copy(from, to)
    }
      

    async move
    (
        source : string,
        destination : string,
        //  { overwrite: true }
    )
    {
        if (await this.exists(destination))
            throw new Error('destination already exists!')
        if (!(await this.exists(source)))
            throw new Error('source doest not exist!')
        return await this.fse.move(source, destination)
        // return await fs.rename(current_path, new_path)
    }

    async read
    (
        path: string,
        parse: boolean = false
    ): Promise<any>
    {
        if (!(await this.exists(path)))
            throw new Error('path: ' + path + ' does not exist!')
        let stat = await fs.stat(path)
        let read : any
        if (stat.isFile())
            read = await fs.readFile(path, 'utf8')
        else if (stat.isDirectory())
            read = await fs.readdir(path)
        return parse ? JSON.parse(read) : read
    }

    async write
    (
        path: string,
        content?: any
    ) 
    {
        content = typeof content === 'object' ? JSON.stringify(content) : content
        if (!(await this.exists(path)))
        {
            if (content === undefined || content === null)
            {
                await fs.mkdir(path, {recursive: true})
                return await this.read(path)
            }
            else
            {
                let dir = ''
                let splits = path.split('/')
                for (let s = 0; s < splits.length; s++)
                {
                    if (s < splits.length - 1)
                        dir += splits[s] + '/'
                }
                if (!(await this.exists(dir)))
                    await fs.mkdir(dir, {recursive: true})
                await fs.writeFile(path, content, 'utf8')
            }
        }
        else
        {
            await fs.writeFile(path, content, 'utf8')
        }
        if (await this.exists(path))
            return await this.read(path)
        else
            throw new Error('unable to write for path: ' + path)
    }

    async erase
    (
        path: string,
        file?: boolean
    ) 
    {
        if (!(await this.exists(path)))
            throw new Error('path: ' + path + ' does not exist!')
        let stat = await fs.stat(path)
        if (stat.isDirectory())
            await fs.rmdir(path, {recursive: true})
        if (stat.isFile())
            await fs.unlink(path)
        if (!(await this.exists(path)))
            return {code: 'success', msg: 'erased: ' + path}
        else
            throw new Error('failed to erase ' + path)
    }


    async walk
    (
        dir: string
    )
    {
        let paths = []
        for await (const d of await fs.opendir(dir))
        {
            const entry = path.join(dir, d.name)
            if (d.isDirectory())
            {
                let walks = await this.walk(entry)
                for (let walk of walks)
                    paths.push(walk)
            } 
            else if (d.isFile())
                paths.push(entry)
        }
        return paths
    }

    /* dont recommend using these lol rips through all the memory as it buffers, just use mueller or some other plugin */
    
    async upload
    (
        path: string,
        buffer
    )
    {
        await fs.writeFile(path, buffer, 'binary')
        return await this.download(path)
    }

    async download
    (
        path: string
    )
    {
        return await fs.readFile(path, 'binary')
    }

    /* streamables, can return this from a controller method */
    // getStreamableFile
    // (
    //     path: string
    // )
    // // : StreamableFile
    // {
    //     // const file = fse.createReadStream(join(process.cwd(), 'package.json'))
    //     const file = fse.createReadStream(path)
    //     return new StreamableFile(file) // or file.pipe(res); // note return not needed, as per example
    // }

}
