import { CommonNsFilesService } from '../../../libs/common/ns/src/lib/files/files.service'

let files = new CommonNsFilesService()

let app = async () => {
    try
    {
        let app_name = process.argv[2]
        let app_name_e2e = app_name + '-e2e'
        let e2e = process.argv[3] ? process.argv[3] === 'true' : false

        if (!app_name)
        {
            throw new Error('expected app name!')
        }
        else
        {

            let workspace : any = await files.read('../../../workspace.json', true)
            let nx : any = await files.read('../../../nx.json', true)

            if (app_name in workspace.projects)
                throw new Error('app name is already taken!')
            
            let demo_name : string = 'demo'
            let demo_name_e2e : string = 'demo-e2e'

            let nx_diff : any = await files.read('./nx.json', true)
            let nx_project = JSON.parse(JSON.stringify(nx_diff.projects[demo_name]).split(demo_name).join(app_name))
            let nx_project_e2e = JSON.parse(JSON.stringify(nx_diff.projects[demo_name]).split(demo_name).join(app_name))
            nx.projects[app_name] = nx_project
            if (e2e)
                nx.projects[app_name_e2e] = nx_project_e2e

            let workspace_diff : any = await files.read('./workspace.json', true)
            let workspace_project = JSON.parse(JSON.stringify(workspace_diff.projects[demo_name]).split(demo_name).join(app_name))
            let workspace_project_e2e = JSON.parse(JSON.stringify(workspace_diff.projects[demo_name]).split(demo_name).join(app_name))
            workspace.projects[app_name] = workspace_project
            if (e2e)
                workspace.projects[app_name_e2e] = workspace_project_e2e

            await files.copy('./' + demo_name, '../../../apps/' + app_name)
            if (e2e)
                await files.copy('./' + demo_name_e2e, '../../../apps/' + app_name_e2e)

            await files.write('../../../workspace.json', JSON.stringify(workspace, undefined, 4))
            await files.write('../../../nx.json', JSON.stringify(nx, undefined, 4))

            await Promise.all((await files.walk('../../../apps/' + app_name)).map(async (path:string) => {
                let file = await files.read(path)
                await files.write(path, file.split(demo_name).join(app_name))
            }))
        }
    }
    catch(e)
    {
        console.error(e)
    }
}
app()