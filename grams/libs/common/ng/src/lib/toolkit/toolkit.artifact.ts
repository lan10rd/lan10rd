import { Component, ChangeDetectionStrategy } from '@angular/core'

import { CommonNgUtilityService } from '../utility/utility.service'

@Component
({
    selector : 'common-ng-toolkit-artifact',
    templateUrl : './toolkit.artifact.html',
    styleUrls : ['./toolkit.artifact.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommonNgToolkitArtifact
{

    constructor
    (
        public util: CommonNgUtilityService
    )
    {

    }
    
}