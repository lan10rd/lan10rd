import { Component } from '@angular/core'
import { CommonNgAppBarService } from './bar.service'

@Component
({
    selector : 'common-ng-app-bar-artifact',
    templateUrl : './bar.artifact.html',
    styleUrls : ['./bar.artifact.scss']
})
export class CommonNgAppBarArtifact
{

    constructor(public srv: CommonNgAppBarService){}

}
