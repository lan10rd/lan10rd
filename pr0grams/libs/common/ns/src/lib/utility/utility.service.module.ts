import { Module, HttpModule } from '@nestjs/common'

import { CommonNsUtilityService } from './utility.service'

import { CommonNsUtilServiceModule } from '../util/util.service.module'
import { CommonNsProcessServiceModule } from '../process/process.service.module'
import { CommonNsFilesServiceModule } from '../files/files.service.module'
import { CommonNsStreamsServiceModule } from '../streams/streams.service.module'
import { CommonNsYamlServiceModule } from '../yaml/yaml.service.module'
import { CommonNsJsonServiceModule } from '../json/json.service.module'
import { CommonNsOsServiceModule } from '../os/os.service.module'
import { CommonNsQueryStringServiceModule } from '../query-string/query-string.service.module'
import { CommonNsChalkServiceModule } from '../chalk/chalk.service.module'
import { CommonNsLodashServiceModule } from '../lodash/lodash.service.module'
import { CommonNsMomentServiceModule } from '../moment/moment.service.module'
import { CommonNsUuidServiceModule } from '../uuid/uuid.service.module'
import { CommonNsRemarkableServiceModule } from '../remarkable/remarkable.service.module'
import { CommonNsJoiServiceModule } from '../joi/joi.service.module'
import { CommonNsRxjsServiceModule } from '../rxjs/rxjs.service.module'
import { CommonNsDotEnvServiceModule } from '../dot-env/dot-env.service.module'
import { CommonNsMinimistServiceModule } from '../minimist/minimist.service.module'
import { CommonNsHttpServiceModule } from '../http/http.service.module'
import { CommonNsLoggerServiceModule } from '../logger/logger.service.module'
import { CommonNsDataBasesMongoServiceModule } from '../data/bases/mongo/mongo.service.module'
import { CommonNsCryptoServiceModule } from '../crypto/crypto.service.module'
import { CommonNsCryptoBcryptServiceModule } from '../crypto/bcrypt/bcrypt.service.module'
import { CommonNsMailServiceModule } from '../mail/mail.service.module'
import { CommonNsSpeakeasyServiceModule } from '../speakeasy/speakeasy.service.module'
import { CommonNsQrcodeServiceModule } from '../qrcode/qrcode.service.module'

@Module({
    imports:
    [
        CommonNsHttpServiceModule,
        CommonNsUtilServiceModule,
        CommonNsProcessServiceModule,
        CommonNsFilesServiceModule,
        CommonNsStreamsServiceModule,
        CommonNsYamlServiceModule,
        CommonNsJsonServiceModule,
        CommonNsOsServiceModule,
        CommonNsQueryStringServiceModule,
        CommonNsChalkServiceModule,
        CommonNsLodashServiceModule,
        CommonNsMomentServiceModule,
        CommonNsUuidServiceModule,
        CommonNsRemarkableServiceModule,
        CommonNsJoiServiceModule,
        CommonNsRxjsServiceModule,
        CommonNsMinimistServiceModule,
        CommonNsDotEnvServiceModule,
        CommonNsLoggerServiceModule,
        CommonNsDataBasesMongoServiceModule,
        CommonNsCryptoServiceModule,
        CommonNsCryptoBcryptServiceModule,
        CommonNsMailServiceModule,
        CommonNsSpeakeasyServiceModule,
        CommonNsQrcodeServiceModule
    ],
    providers: 
    [
        CommonNsUtilityService
    ],
    exports:
    [
        CommonNsUtilityService
    ]
})
export class CommonNsUtilityServiceModule
{
    
}