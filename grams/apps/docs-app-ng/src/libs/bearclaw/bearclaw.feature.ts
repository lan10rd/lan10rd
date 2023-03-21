import { Component } from '@angular/core';

import { CommonNgUtilityService } from '@grams/common/ng'

import { ChatGPTAPI } from 'chatgpt'

async function example() {
  
}

@Component
({
    selector: 'bearclaw-feature',
    templateUrl: './bearclaw.feature.html',
    styleUrls: ['./bearclaw.feature.scss']
})
export class BearclawFeature
{
    
    constructor
    (
        public util: CommonNgUtilityService
    )
    {

    }

    async example(){
        const api = new ChatGPTAPI({
            apiKey: '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'
        })
    
        const res = await api.sendMessage('Hello World!')
        console.log(res.text)
    }

    async ngOnInit(){
        this.example()
    }

}