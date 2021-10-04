import { Injectable } from '@nestjs/common'

/* consider using this for hashing */
@Injectable()
export class CommonNsCryptoBcryptService
{

    bcrypt = require('bcryptjs')

    async hash
    (
        text: string,
        saltRounds?: number
    )
    {
        if (!saltRounds) saltRounds = 5 + Math.floor(Math.random() * 11)
        return await this.bcrypt.hash(text, saltRounds)
    }

    async compare
    (
        text: string,
        hash: string
    )
    {
        return await this.bcrypt.compare(text, hash)
    }

    // async hash
    // (
    //     password: string,
    //     saltOrRounds = 10
    // )
    // {
    //     return this.bcrypt.hash(password, saltOrRounds)
    // }

    // async salt
    // (
    //     rounds?: number
    // )
    // {
    //     return rounds ? this.bcrypt.genSalt(rounds) : this.bcrypt.genSalt()
    // }

    // async hashPassword
    // (
    //     password: string
    // )
    // {
    //     return this.hash(await this.salt(10))
    // }

    // async compare
    // (
    //     password: string,
    //     hash: string
    // )
    // {
    //     return this.bcrypt.compare(password, hash)
    // }

}
