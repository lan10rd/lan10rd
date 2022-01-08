import { Injectable } from '@nestjs/common'

import { createCipheriv, createDecipheriv, randomBytes, scrypt } from 'crypto'
import { promisify } from 'util'

/* consider using this for encryption/decryption */
@Injectable()
export class CommonNsCryptoService
{

    async generateSecret
    (
        byteLength = 256,
        encoding: BufferEncoding = 'base64'
    )
    {
        // node -e "console.log(require('crypto').randomBytes(256).toString('base64'));"
        return (await promisify(randomBytes)(byteLength)).toString(encoding)
    }

    async encrypt
    (
        text: string,
        password: string = 'password',
        iv = randomBytes(16)
    )
    {
        // The key length is dependent on the algorithm.
        // In this case for aes256, it is 32 bytes.
        const key = (await promisify(scrypt)(password, 'salt', 32)) as Buffer;
        const cipher = createCipheriv('aes-256-ctr', key, iv);

        const encryptedText = Buffer.concat([
          cipher.update(text),
          cipher.final(),
        ]);
        return {text, iv, encryptedText, key, password}
    }

    decrypt
    (
        encryptedText,
        key,
        iv
    )
    {
        const decipher = createDecipheriv('aes-256-ctr', key, iv)
        const decryptedText = Buffer.concat([
          decipher.update(encryptedText),
          decipher.final(),
        ])
        return {key, iv, decryptedText}
    }


}
