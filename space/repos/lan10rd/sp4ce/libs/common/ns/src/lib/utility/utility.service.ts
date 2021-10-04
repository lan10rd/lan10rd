import { Injectable, Logger } from '@nestjs/common'

import { CommonNsUtilService } from '../util/util.service'
import { CommonNsProcessService } from '../process/process.service'
import { CommonNsStreamsService } from '../streams/streams.service'
import { CommonNsFilesService } from '../files/files.service'
import { CommonNsYamlService } from '../yaml/yaml.service'
import { CommonNsJsonService } from '../json/json.service'
import { CommonNsOsService } from '../os/os.service'
import { CommonNsQueryStringService } from '../query-string/query-string.service'
import { CommonNsChalkService } from '../chalk/chalk.service'
import { CommonNsLodashService } from '../lodash/lodash.service'
import { CommonNsMomentService } from '../moment/moment.service'
import { CommonNsUuidService } from '../uuid/uuid.service'
import { CommonNsRemarkableService } from '../remarkable/remarkable.service'
import { CommonNsJoiService } from '../joi/joi.service'
import { CommonNsRxjsService } from '../rxjs/rxjs.service'
import { CommonNsDotEnvService } from '../dot-env/dot-env.service'
import { CommonNsMinimistService } from '../minimist/minimist.service'
import { CommonNsHttpService } from '../http/http.service'
import { CommonNsLoggerService } from '../logger/logger.service'
import { CommonNsCryptoService } from '../crypto/crypto.service'
import { CommonNsCryptoBcryptService } from '../crypto/bcrypt/bcrypt.service'
import { CommonNsMailService } from '../mail/mail.service'
import { CommonNsSpeakeasyService } from '../speakeasy/speakeasy.service'
import { CommonNsQrcodeService } from '../qrcode/qrcode.service'

@Injectable()
export class CommonNsUtilityService
{

    public requires : any = {}
    public services : any = {}
    public functions : any = {}
    public sockets : any = {}
    public cache: any = {}
    public data : any = {}

    constructor
    (
        public http: CommonNsHttpService,
        public util: CommonNsUtilService,
        public process: CommonNsProcessService,
        public streams: CommonNsStreamsService,
        public files: CommonNsFilesService,
        public json: CommonNsJsonService,
        public yaml: CommonNsYamlService,
        public os: CommonNsOsService,
        public queryString: CommonNsQueryStringService,
        public chalk: CommonNsChalkService,
        public lodash: CommonNsLodashService,
        public moment: CommonNsMomentService,
        public uuid: CommonNsUuidService,
        public remarkable: CommonNsRemarkableService,
        public joi: CommonNsJoiService,
        public rxjs: CommonNsRxjsService,
        public dotEnv: CommonNsDotEnvService,
        public minimist: CommonNsMinimistService,
        public logger: CommonNsLoggerService,
        public crypto: CommonNsCryptoService,
        public bcrypt: CommonNsCryptoBcryptService,
        public mailer: CommonNsMailService,
        public speakeasy: CommonNsSpeakeasyService,
        public qrcode: CommonNsQrcodeService
    )
    {
        /* requires to expose */
        this.requires.util = util.util
        this.requires.os = os.os
        this.requires.fs = files.fs
        this.requires.fse = files.fse
        this.requires.path = files.path
        this.requires.yaml = yaml.yaml
        this.requires.queryString = queryString.queryString
        this.requires.chalk = chalk.chalk
        this.requires._ = lodash._
        this.requires.moment = moment.moment
        this.requires.uuid = uuid.uuid
        this.requires.remarkable = remarkable.remarkable
        this.requires.minimist = minimist.minimist
        this.requires.joi = joi.joi
        this.requires.rxjs = rxjs
        this.requires.dotenv = dotEnv.dotenv
        this.requires.qrcode = qrcode.qrcode
        this.requires.speakeasy = speakeasy.speakeasy
        this.requires.nodemailer = mailer.nodemailer
        this.requires.bcrypt = bcrypt.bcrypt

        this.requires.multer = files.multer
        this.requires.busboy = files.busboy

        this.requires['multicast-dns'] = require('multicast-dns')
        this.requires['socket.io-client'] = require('socket.io-client')
        this.requires.chokidar = require('chokidar')
    }

}