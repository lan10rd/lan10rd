import { Controller, Get, Post, Req, Res } from '@nestjs/common'

@Controller('common/http')
export class CommonNsHttpController
{

    @Get('xsrf')
    xsrf
    (
        @Req() req
    )
    {
        return req.csrfToken()
    }

}
