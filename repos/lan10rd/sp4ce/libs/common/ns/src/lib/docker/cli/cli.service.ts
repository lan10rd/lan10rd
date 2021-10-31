import { Injectable } from '@nestjs/common'

import { CommonNsProcessService } from '../../process/process.service'
import { CommonNsJsonService } from '../../json/json.service'
import { CommonNsYamlService } from '../../yaml/yaml.service'
import { CommonNsLoggerService } from '../../logger/logger.service'


@Injectable()
export class CommonNsDockerCliService
{

    constructor
    (
        public process : CommonNsProcessService,
        public json : CommonNsJsonService,
        public yaml : CommonNsYamlService,
        public logger : CommonNsLoggerService
    )
    {

    }

    /* app */
    async appBundle(){}
    async appCompletion(){}
    async appInit(){}
    async appInspect(){}
    async appInstall(){}
    async appList(){}
    async appPull(){}
    async appPush(){}
    async appRender(){}
    async appStatus(){}
    async appUninstall(){}
    async appUpgrade(){}
    async appValidate(){}
    async appVersion(){}

    /* builder */
    async builderBuild(){}
    async builderPrune(){}

    /* buildx */
    async buildxBake(){}
    async buildxBuild(){}
    async buildxCreate(){}
    async buildxDu(){}
    async buildxImageTools(){}
    async buildxImageToolsCreate(){}
    async buildxImageToolsInspect(){}
    async buildxInspect(){}
    async buildxInstall(){}
    async buildxIs(){}
    async buildxPrune(){}
    async buildxRm(){}
    async buildxStop(){}
    async buildxUninstall(){}
    async buildxUse(){}
    async buildxVersion(){}

    /* compose */
    async composeBuild(){}
    async composeConvert(){}
    async composeCreate(){}
    async composeDown(){}
    async composeEvents(){}
    async composeExec(){}
    async composeImages(){}
    async composeKill(){}
    async composeLogs(){}
    async composeLs(){}
    async composePause(){}
    async composePs(){}
    async composePull(){}
    async composePush(){}
    async composeRm(){}
    async composeRun(){}
    async composeStart(){}
    async composeStop(){}
    async composeTop(){}
    async composeUnpause(){}
    async composeUp(){}

    /* config */
    async configCreate(){}
    async configInspect(){}
    async configLs(){}
    async configRm(){}

    /* container */
    async containerAttach(){}
    async containerCommit(){}
    async containerCp(){}
    async containerCreate(){}
    async containerDiff(){}
    async containerExec(){}
    async containerExport(){}
    async containerInspect(ID: string){ return this.cli(`container inspect ${ID} --format '{{json .}}'`, { convenient: true, parse: true }) }
    async containerKill(ID: string){ return this.cli(`container kill ${ID}`) }
    async containerLogs(){}
    async containerLs(){ return this.cli(`container ls --format '{{json .}}'`, { convenient: true, parse: true }) }
    async containerPause(){}
    async containerPort(){}
    async containerPrune(){}
    async containerRename(){}
    async containerRestart(){}
    async containerRm(ID: string){ return this.cli(`container rm ${ID}`) }
    
    async containerRun(){}
    async containerStart(){}

    async containerStats
    (
        options ?: {
            all ?: boolean,
            format ?: string,
            formatJson ?: boolean, // not docker option
            noStream ?: boolean,
            noTruncate ?: boolean
        }
    )
    {
        let optionsString = ''
        if (options?.all)
            optionsString += '--all '
        if (options?.format)
            optionsString += '--format ' + options.format
        else if (options?.formatJson)
            optionsString += `--format '{{json .}}' `
        if (options?.noStream)
            optionsString += '--no-stream '
        if (options?.noTruncate)
            optionsString += '--no-trunc '
        if (options?.noStream)
            return this.cli('container stats ' + optionsString, { convenient: true, parse: true })
        return this.process.spawn('docker container stats ' + optionsString)
    }

    async containerStop(ID : string, cli_options : any = {}){ return this.cli(`container stop ${ID}`) }
    async containerStopRemote(ID : string, host : string, cli_options : any = {}){ return this.containerStop(ID, {host, ...cli_options}) }

    async containerTop(){}
    async containerUnpause(){}
    async containerUpdate(){}
    async containerWait(){}

    /* context */
    async contextCreate(){}
    async contextExport(){}
    async contextImport(){}
    async contextInspect(){}
    async contextLs(){}
    async contextRm(){}
    async contextUpdate(){}
    async contextUse(){}

    /* checkpoint */
    async checkpointCreate(){}
    async checkpointLs(){}
    async checkpointRm(){}

    /* cluster */
    async clusterBackup(){}
    async clusterCreate(){}
    async clusterInspect(){}
    async clusterLs(){}
    async clusterRestore(){}
    async clusterRm(){}
    async clusterUpdate(){}
    async clusterVersion(){}

    /* node */
    async nodeLs (cli_options : any = this.parse_cli_options()) { return this.cli(`node ls --format '{{json .}}'`, cli_options) }
    async nodeLsRemote(host : string, cli_options : any) { return this.nodeLs({host, cli_options}) }

    async nodeDemote(){}

    async nodeInspect(ID : string, cli_options : any = {}){ return this.json.parse( await this.cli(`node inspect ${ID} --format '{{json .}}'`, cli_options)) }
    async nodeInspectRemote(ID : string, host : string, cli_options : any = {}){ return this.nodeInspect(ID, {host, ...cli_options}) }

    async nodePromote(){}

    async nodePs(ID : string, cli_options : any = this.parse_cli_options()){ return this.cli(`node ps --no-trunc --format '{{json .}}' ${ID} `, cli_options) }
    async nodePsRemote(ID : string, host : string, cli_options : any = this.parse_cli_options()){ return this.nodePs(ID, {host, ...cli_options}) }

    async nodeRm(){}


    async nodeUpdate
    (
        nodeID,
        options?: {
            availability?: 'active' | 'pause' | 'drain' ,
            addLabels?: string[],
            removeLabels?: string[],
            role?: 'worker' | 'manager'
        }
    )
    { 
        let cmd_options = ''
        if ('availability' in options)
            cmd_options += `--availability ${options.availability} `
        if ('role' in options)
            cmd_options += `--role ${options.role} `
        if ('addLabels' in options)
            for (let label of options.addLabels)
                cmd_options += `--label-add ${label} `
        if ('removeLabels' in options)
            for (let label of options.removeLabels)
                cmd_options += `--label-rm ${label} `
        return this.cli(`node update ${cmd_options} ${nodeID}`)
    }

    /* services */
    async serviceLs (cli_options : any = this.parse_cli_options()) { return this.cli(`service ls --format '{{json .}}'`, cli_options) }
    async serviceLsRemote (host : string, cli_options : any = this.parse_cli_options()) { return this.serviceLs({host, ...cli_options}) }

    async serviceCreate () { }

    async serviceInspect(name : string, cli_options : any = this.parse_cli_options()){ return this.cli(`service inspect ${name} --format '{{json .}}'`, cli_options) }
    async serviceInspectRemote(name : string, host : string, cli_options : any = this.parse_cli_options()){ return this.serviceInspect(name, {host, ...cli_options}) }

    async serviceLogs(){}
    async serviceLogsRemote(){}

    async servicePs(name: string, cli_options : any = this.parse_cli_options()){ return this.cli(`service ps ${name} --no-trunc  --format '{{json .}}'`, cli_options) }
    async servicePsRemote(name : string, host : string, cli_options : any = this.parse_cli_options()){ return this.servicePs(name, {host, ...cli_options}) }
    
    async serviceRollback(){}

    async serviceRm(name : string, cli_options : any = this.parse_cli_options()){ return this.cli(`service rm ${name}`, cli_options) }
    async serviceRmRemote(name : string, host : string, cli_options : any = this.parse_cli_options()){ return this.serviceRm(name, {host, ...cli_options}) }

    async serviceScale(name: string, replicas: number, cli_options : any = this.parse_cli_options()){ return this.cli(`service scale ${name}=${replicas}`, cli_options) }
    async serviceScaleRemote(name : string, replicas : number, host : string, cli_options : any = this.parse_cli_options()){ return this.serviceScale(name, replicas, {host, ...cli_options}) }
    
    async serviceUpdate
    (
        service_name : string,
        options?: {
            force?: boolean,
            orTrue?: boolean,
            args ?: string, // --args
            capAdd ?: string, // --cap-add
            capDrop ?: string, // --cap-drop,
            configAdd ?: string, // --config-add,
            configRm ?: string, // --config-rm
            constraintAdd ?: string, // --constraint-add
            constraintRm ?: string, // --constraint-rm
            constraintLabelAdd ?: string, // --constainer-label-add
            containerLabelRm ?: string, // --container-label-rm
            credentialSpec ?: string, // --credential-spec
            detach ?: string, // --detach
            dnsAdd ?: string, // --dnsAdd
            dnsOptionAdd ?: string, // --dns-option-add,
            dnsOptionRm ?: string, // --dns-option-rm
            dnsSearchAdd ?: string, // --dns-search-add
            dnsSearchRm ?: string, // --dns-search-rm
            endpointMode ?: string, // --endpoint-mode
            entrypoint ?: string, // --entrypoint
            envAdd ?: string, // --env-add
            envRm ?: string, // --env-rm
            genericResourceAdd ?: string, // --generic-resource-add
            genericResourceRm ?: string, // --generic-resource-rm
            groupAdd ?: string, // --group-add
            groupRm ?: string, // --group-rm
            healthCmd ?: string, // --health-cmd
            healthInterval ?: string, // --health-interval, ms|s|m|h
            healthRetries ?: string, // --health-retries
            healthStartPeriod ?: string, // --health-start-period
            healthTimeout ?: string, // --health-timeout
            hostAdd ?: string, // --host-add
            hostRm ?: string, // --host-rm
            hostname ?: string, // --hostname
            image ?: string, // --image
            init ?: string, // --init
            isolation ?: string, // --isolation
            labelAdd ?: string, // --label-add
            labelRm ?: string, // --label-rm
            limitCpu ?: string, // --limit-cpu
            limitMemory ?: string, // --limit-memory
            limitPids ?: string, // --limit-pids
            logDriver ?: string, // --log-driver
            logOpt ?: string, // --log-opt
            maxConcurrent ?: string, // --max-concurrent
            mountAdd ?: string, // --mount-add
            mountRm ?: string, // --mount-rm
            networkAdd ?: string, // --network-add
            networkRm ?: string, // --network-rm
            noHealthcheck ?: string, // --no-healthcheck
            noResolveImage ?: string, // --no-resolve-image
            placementPrefAdd ?: string, // --placement-pref-add
            placementPrefRm ?: string, // --placement-pref-rm
            publishAdd ?: string, // --publish-add
            publishRm ?: string, // --publish-rm
            quiet ?: string, // --quiet
            readOnly ?: string, // --read-only
            replicas ?: string, // --replicas
            replicasMaxPerNode ?: string, // --replicas-max-per-node
            reserveCpu ?: string, // --reserve-cpu
            reserveMemory ?: string, // --reserve-memory
            restartCondition ?: string, // --restart-condition "none"|"on-failure"|"any"
            restartDelay ?: string, // --restart-delay (ns|us|ms|s|m|h)
            restartMaxAttempts ?: string, // --restart-max-attempts  #
            restartWindow ?: string, // --restart-window (ns|us|ms|s|m|h)
            rollback ?: string, // --rollback
            rollbackDelay ?: string, // --rollback-delay (ns|us|ms|s|m|h)
            rollbackFailureAction ?: string, // ("pause"|"continue")
            rollbackMaxFailureRatio ?: string, // --rollback-max-failure-ratio,
            rollbackMonitor ?: string, // --rollback-monitor (ns|us|ms|s|m|h)
            rollbackOrder ?: string, // --rollback-order ("start-first"|"stop-first")
            rollbackParallelism ?: string, // --rollback-parallelism (0 to roll back all at once)
            secretAdd ?: string, // --secret-add 
            secretRm ?: string, // --secret-rm
            stopGracePeriod ?: string, // --stop-grace-period (ns|us|ms|s|m|h)
            stopSignal ?: string, // --stop-signal
            sysctlAdd ?: string, // --sysctl-add
            systctlRm ?: string, // --sysctl-rm
            tty ?: string, // --tty
            ulimitAdd ?: string, // --ulimit-add
            ulimitRm ?: string, // --ulimit-rm
            updateDelay ?: string, // --update-delay (ns|us|ms|s|m|h)
            updateFailureAction ?: string, // --update-failure-action ("pause"|"continue"|"rollback")
            updateMaxFailureRatio ?: string, // --update-max-failure-ratio
            updateMonitor ?: string, // --update-monitor (ns|us|ms|s|m|h)
            updateOrder ?: string, //  --update-order ("start-first"|"stop-first")
            updateParallelism ?: string, //  --update-parallelism (0 to update all at once)
            user ?: string, // --user Username or UID (format: <name|uid>[:<group|gid>])
            withRegistryAuth ?: string, // --with-registry-auth
            workdir ?: string // --workdir
        }
    )
    {
        return this.cli(`service update ${options?.force ? '--force' : ''} ${service_name} ${options?.orTrue ? ' || true' : ''}`)
    }

    /* networks */
    async networkLs (cli_options : any = this.parse_cli_options()) { return this.cli(`network ls --format '{{json .}}'`, cli_options) }
    async networkLsRemote (host : string, cli_options : any = this.parse_cli_options()) { return this.networkLs({host, ...cli_options}) }

    async networkAdd(network: string, options: any = { attachable: false, type: 'overlay', cli_options : {}}) { return this.cli(`network create -d ${options.type} ` + (options.attachable ? ' --attachable ' : '') + network, options.cli_options) }
    async networkAddRemote(network: string, host : string, options: any = { attachable: false, type: 'overlay', cli_options: {}}) { return this.networkAdd(network, {...options, cli_options: {host, ...options.cliOptions}}) }

    async networkConnect(){}
    async networkCreate(){}
    async networkDisconnect(){}
    async networkInspect(){}
    async networkPrune(){}
    async networkRm(){}

    /* stack */
    async stackDeploy
    (
        config: string,
        stack: string,
        options?: {
            namespace ?: string,
            prune ?: boolean,
            resolveImage ?: string,
            composeFileSdIn ?: string, // -c --compose-file , Path to a Compose file, or "-" to read from stdin -c 
            changeHost ?: string, // not a docker option
        } // inline , use deploy - ,
    )
    {
        try
        {
            let yaml = await this.yaml.loadFile(config)
            let runningServices = await this.serviceLs()
            let runningNetworks = await this.networkLs()
            if ('networks' in yaml)
            {
                for (let network of Object.keys(yaml.networks))
                {
                    let find = runningNetworks.find(n => { return n.Name === network})
                    try
                    {
                        if (!find)
                            await this.networkAdd(network, {attachable: true, type: 'overlay'})
                    }
                    catch(e)
                    {
                        // this.logger.error(e)
                        this.logger.debug('network add e: ', e.message)
                    }
                }
            }
            let cmd = (options?.changeHost ? 'HOME=' + options.changeHost + ' ' : '') + 'docker stack deploy -c ' + config + ' --resolve-image=never ' + stack
            let output = await this.cli(cmd, {convenient: true, addDocker: false})
            return output
        }
        catch(e)
        {
            // throw new Error(e)
            throw e
        }
    }

    async stackPs (name : string, cli_options : any = this.parse_cli_options()) { return this.cli(`stack ps ${name} --no-trunc --format '{{json .}}'`, cli_options) }
    async stackPsRemote (name : string, host : string, cli_options : any = this.parse_cli_options()) { return this.stackPs(name, {host, ...cli_options}) }

    async stackLs (cli_options : any = this.parse_cli_options()) { return this.cli(`stack ls --format '{{json .}}'`, cli_options) }
    async stackLsRemote (host : string, cli_options : any = this.parse_cli_options()) { return this.stackLs({host, ...cli_options}) }

    async stackRm (name : string, cli_options : any = {}) { return this.cli(`stack rm ${name}`, ) }
    async stackRmRemote (name : string, host : string) { return this.stackRm(name, {host}) }

    async stackServices (name : string, cli_options : any = this.parse_cli_options()) { return this.cli(`stack services ${name} --format '{{json .}}'`, cli_options) }
    async stackServicesRemote (name : string, host : string, cli_options : any = this.parse_cli_options()) { return this.stackServices(name, {host, ...cli_options}) }


    /* swarm */
    async swarmCa(){}
    async swarmInit(){}
    async swarmJoin(){}
    async swarmJoinToken(){}
    async swarmLeave(){}
    async swarmUnlock(){}
    async swarmUnlockKey(){}
    async swarmUpdate(){}

    /* images */
    async imageBuild(){}
    async imageHistory(){}
    async imageImport(){}
    async imageLoad(){}
    async imageLs(){}
    async imagePrune(){}
    async imagePull(){}
    async imagePush(){}
    async imageRm(){}
    async imageSave(){}
    async imageTag(){}

    /* manifest */
    async manifestAnnotate(){}
    async manifestCreate(){}
    async manifestInspect(){}
    async manifestPush(){}
    async manifestRm(){}

    /* registry */
    async registryEvents(){}
    async registryHistory(){}
    async registryInfo(){}
    async registryInspect(){}
    async registryJobLogs(){}
    async registryLs(){}
    async registryRmi(){}

    /* system */
    async systemDf(){}
    async systemEvents(){}
    async systemInfo(){}
    async systemPrune(){}

    /* other */
    async attach(){}
    async build(){}
    async commit(){}

    async cp(){}
    async create(){}
    async diff(){}
    async events(){}
    async exec(){}
    async exportDocker(){}
    async history(){}
    async images(){}
    async importDocker(){}
    async info(){}
    async inspect(){}
    async kill(){}
    async load(){}
    async login(){}
    async logout(){}
    async logs(){}
    async pause(){}
    async plugin(){}
    async port(){}
    async ps(){}
    async pull(){}
    async push(){}
    async rename(){}
    async restart(){}
    async rm(){}
    async rmi(){}
    async run(){}
    async save(){}
    async search(){}
    async start(){}
    async stats(){}
    async stop(){}
    async tag(){}
    async top(){}
    async unpause(){}
    async update(){}
    async version(){}
    async wait(){}

    /* secret */
    async secretCreate(){}
    async secretInspect(){}
    async secretLs(){}
    async secretRm(){}

    /* trust */
    async trustInspect(){}
    async trustKey(){}
    async trustKeyGenerate(){}
    async trustKeyLoad(){}
    async trustRevoke(){}
    async trustSign(){}
    async trustSigner(){}
    async trustSignerAdd(){}
    async trustSignerRemove(){}

    /* wrapper */
    async wrapperServiceDetails
    (
        service_name : string,
        options : any = {
            node_inspect : false,
            running_only : true
        }
    )
    {
        let information : any = {}
        let ps = await this.servicePs(service_name)
        for (let p of ps)
        {
            try
            {
                let id = p.ID
                let info : any = {
                    ps : p,
                    inspect_status : JSON.parse((await this.cli(`inspect --format '{{json .}}' ${id}`)).trim())
                }
                info.container_id = info.inspect_status.Status.ContainerStatus.ContainerID
                info.node_id = info.inspect_status.NodeID
                let node_inspect = await this.nodeInspect(info.node_id, {convenient: true})
                info.node_inspect = node_inspect
                info.node_ip = node_inspect.Status.Addr
                if (!options?.node_inspect)
                    delete info.node_inspect
                if (options?.running_only && info.inspect_status.Status.State === 'running')
                {
                    information[id] = info
                }
            }
            catch(e)
            {
                this.logger.error(e)
            }
        }
        return information
    }

    /* helpers */

    parse_cli_options
    (
    )
    {
        return {
            convenient: true,
            parse: true
        }
    }

    async cli
    (
        command: string,
        options: any = {
            convenient : true,
            parse : false,
            addDocker : true,
            addSudo : false,
            host : ''
        }
    )
    {
        try
        {
            if (options?.host && options.host.length > 0)
                command = `-H ${options.host} ` + command
            if ((options.addDocker || !('addDocker' in options)) && !command.startsWith('docker'))
                command = 'docker ' + command
            if (options?.addSudo && !command.startsWith('sudo'))
                command = 'sudo ' + command
            let res = await this.process.exec(command)
            if (!options.convenient) return res
            return options.parse ? this.parse(res.stdout) : res.stdout
        }
        catch(e)
        {
            throw e
        }
    }

    parse
    (
        raw_output: string
    )
    {
        let output: any[] = []
        for (let line of raw_output.split('\n'))
        {
            let parsed = this.json.parse(line)
            if (parsed !== '') output.push(parsed)
        }
        return output
    }

}