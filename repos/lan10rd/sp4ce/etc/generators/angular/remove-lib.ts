import { CommonNsFilesService } from '../../../libs/common/ns/src/lib/files/files.service'

let files = new CommonNsFilesService()

let app = async () => {
    try
    {
        let lib_name = process.argv[2]

        if (!lib_name)
        {
            throw new Error('expected lib name!')
        }
        else
        {

            let workspace : any = await files.read('../../../workspace.json', true)
            let nx : any = await files.read('../../../nx.json', true)
            let tsconfig_base : any = await files.read('../../../tsconfig.base.json', true)

            if (!(lib_name in workspace.projects))
                throw new Error('lib name is not a project!')
            
            delete nx.projects[lib_name]
            delete workspace.projects[lib_name]
            delete tsconfig_base.compilerOptions.paths['@' + nx.npmScope + '/' + lib_name]

            await files.erase('../../../libs/' + lib_name)

            await files.write('../../../workspace.json', JSON.stringify(workspace, undefined, 4))
            await files.write('../../../nx.json', JSON.stringify(nx, undefined, 4))
            await files.write('../../../tsconfig.base.json', JSON.stringify(tsconfig_base, undefined, 4))
        }
    }
    catch(e)
    {
        console.error(e)
    }
}
app()