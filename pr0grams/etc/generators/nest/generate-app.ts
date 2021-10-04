import { CommonNsFilesService } from '../../../libs/common/ns/src/lib/files/files.service'

let files = new CommonNsFilesService()

let app = async () => {
    try
    {
        let api_name = process.argv[2]

        if (!api_name)
        {
            throw new Error('expected api name!')
        }
        else
        {

            let workspace : any = await files.read('../../../workspace.json', true)
            let nx : any = await files.read('../../../nx.json', true)

            if (api_name in workspace.projects)
                throw new Error('api name is already taken!')
            
            let demo_name : string = 'demo-api'
            let nx_diff : any = await files.read('./nx.json', true)
            let nx_project = JSON.parse(JSON.stringify(nx_diff.projects[demo_name]).split(demo_name).join(api_name))
            nx.projects[api_name] = nx_project

            let workspace_diff : any = await files.read('./workspace.json', true)
            let workspace_project = JSON.parse(JSON.stringify(workspace_diff.projects[demo_name]).split(demo_name).join(api_name))
            workspace.projects[api_name] = workspace_project

            await files.copy('./' + demo_name, '../../../apps/' + api_name)
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