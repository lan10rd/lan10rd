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

            console.log('initializing')
            let workspace : any = await files.read('../../../workspace.json', true)
            let nx : any = await files.read('../../../nx.json', true)
            let tsconfig_base : any = await files.read('../../../tsconfig.base.json', true)
            
            let demo_lib_name : string = 'demo-lib'

            if (lib_name in workspace.projects)
                throw new Error('name is already taken!')

            console.log('nx')
            let nx_diff : any = await files.read('./nx.json', true)
            let nx_project = JSON.parse(JSON.stringify(nx_diff.projects[demo_lib_name]).split(demo_lib_name).join(lib_name))
            nx.projects[lib_name] = nx_project

            console.log('workspace')
            let workspace_diff : any = await files.read('./workspace.json', true)
            let workspace_project = JSON.parse(JSON.stringify(workspace_diff.projects[demo_lib_name]).split(demo_lib_name).join(lib_name))
            workspace.projects[lib_name] = workspace_project

            console.log('tsconfig_base')
            let demo_path = '@sp4ce/' + demo_lib_name
            let path = '@' + nx.npmScope + '/' + lib_name
            let demo_tsconfig = await files.read('./tsconfig.base.json', true)
            tsconfig_base.compilerOptions.paths[path] = demo_tsconfig.compilerOptions.paths[demo_path].map((path:string) => {return path.split(demo_lib_name).join(lib_name) })

            console.log('finalizing')
            await files.copy('./' + demo_lib_name, '../../../libs/' + lib_name)

            await files.write('../../../workspace.json', JSON.stringify(workspace, undefined, 4))
            await files.write('../../../nx.json', JSON.stringify(nx, undefined, 4))
            await files.write('../../../tsconfig.base.json', JSON.stringify(tsconfig_base, undefined, 4))

            await Promise.all((await files.walk('../../../libs/' + lib_name)).map(async (path:string) => {
                let file = await files.read(path)
                await files.write(path, file.split(demo_lib_name).join(lib_name).split('@sp4ce').join('@' + nx.npmScope))
            }))

            let module_path = '../../../libs/' + lib_name + '/src/lib/' +  demo_lib_name + '.module.ts'
            await files.erase(module_path)
            files.write(module_path.split(demo_lib_name).join(lib_name), "import { Module } from '@nestjs/common';\n\n@Module({\n\tcontrollers: [],\n\t\n\tproviders: [],\n\texports: [],\n})\nexport class DemoLibModule {}\n")

        }
    }
    catch(e)
    {
        console.error(e)
    }
}
app()