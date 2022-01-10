import { CommonNsFilesService } from '../../../libs/common/ns/src/lib/files/files.service'

let files = new CommonNsFilesService()

let app = async () => {
    try
    {
        let app_name = process.argv[2]
        let app_name_e2e = app_name + '-e2e'

        if (!app_name)
        {
            throw new Error('expected app name!')
        }
        else
        {

            let workspace : any = await files.read('../../../workspace.json', true)
            let nx : any = await files.read('../../../nx.json', true)
            let e2e : boolean = app_name_e2e in nx.projects

            if (!(app_name in workspace.projects))
                throw new Error('app name is not a project!')
            
            delete nx.projects[app_name]
            if (e2e)
                delete nx.projects[app_name_e2e]

            delete workspace.projects[app_name]
            if (e2e)
                delete workspace.projects[app_name_e2e]

            await files.erase('../../../apps/' + app_name)
            if (e2e)
                await files.erase('../../../apps/' + app_name_e2e)

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