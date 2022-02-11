import { NgModule, Injectable } from '@angular/core'
import { HammerModule } from '@angular/platform-browser'

import * as Hammer from 'hammerjs'
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser'

@Injectable()
export class MyHammerConfig extends HammerGestureConfig {
    override overrides = <any> {
        swipe: { direction: Hammer.DIRECTION_ALL },
    };
}

@NgModule
({
    imports: [HammerModule],
    providers: [
        {
            provide: HAMMER_GESTURE_CONFIG,
            useClass: MyHammerConfig
        }
    ]
}) 
export class CommonNgHammerConfigModule
{

}