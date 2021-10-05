import { CommonNsFilesService } from '../../../libs/common/ns/src/lib/files/files.service'

let files = new CommonNsFilesService()

let app = async () => {
    try
    {
        let api_name = process.argv[2]

        if (!api_name)
        {
            throw new Error('expected app name!')
        }
        else
        {
            let workspace : any = await files.read('../../../workspace.json', true)
            let nx : any = await files.read('../../../nx.json', true)

            if (!(api_name in workspace.projects))
                throw new Error('api name is not a project!')
            
            delete nx.projects[api_name]
            delete workspace.projects[api_name]

            await files.erase('../../../apps/' + api_name)

            await files.write('../../../workspace.json', JSON.stringify(workspace, undefined, 4))
            await files.write('../../../nx.json', JSON.stringify(nx, undefined, 4))
        }
    }
    catch(e)
    {
        console.error(e)
    }
}
app()