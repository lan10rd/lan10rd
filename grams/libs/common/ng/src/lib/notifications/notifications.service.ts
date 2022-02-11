import { Injectable } from '@angular/core'

@Injectable
({
    providedIn: 'root'
})
export class CommonNgNotificationsService
{

    requestingPermission: boolean = false
    permissionResult: any

    constructor
    (
    )
    {
        this.permissionResult = Notification.permission
    }

    async requestPermission
    (
    )
    {
        this.requestingPermission = true
        try
        {
            let result = await Notification.requestPermission()
            this.permissionResult = result
            this.requestingPermission = false
            return result === 'granted'
        }
        catch(e)
        {
            this.requestingPermission = false
            return false
        }
    }

    create
    (
        title: string,
        options?: NotificationOptions
    ): Notification
    {
        return new Notification(title, options)
    }


}