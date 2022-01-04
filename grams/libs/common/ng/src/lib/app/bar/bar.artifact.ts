import { Component, ViewChild } from '@angular/core'
import { CommonNgAppBarService } from './bar.service'

@Component
({
    selector : 'common-ng-app-bar-artifact',
    templateUrl : './bar.artifact.html',
    styleUrls : ['./bar.artifact.scss']
})
export class CommonNgAppBarArtifact
{

    @ViewChild('appBarElement') appBarElement: any

    constructor
    (
        public srv: CommonNgAppBarService
    )
    {
        
    }

    ngAfterViewInit
    (
    )
    {
        this.srv.appBarElementRef = this.appBarElement
    }

}
