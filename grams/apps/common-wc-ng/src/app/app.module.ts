import { NgModule, Injector } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { createCustomElement } from '@angular/elements'
import { HttpClientModule } from '@angular/common/http'

import { 
  CommonNgSelectElement, CommonNgSelectElementModule,
  CommonNgButtonElement, CommonNgButtonElementModule
} from '@grams/common/ng'

@NgModule
({
  imports: [BrowserModule, HttpClientModule, CommonNgSelectElementModule],
  declarations: [],
  providers: [],
  bootstrap: [],
  entryComponents: []
})
export class AppModule {
  constructor
  (
      injector: Injector
  )
  {
    const customSelect = createCustomElement(CommonNgSelectElement, {injector: injector})
    customElements.get('common-ng-select-element-wc') || customElements.define('common-ng-select-element-wc', customSelect)
    const customButton = createCustomElement(CommonNgButtonElement, {injector: injector})
    customElements.get('common-ng-button-element-wc') || customElements.define('common-ng-button-element-wc', customButton)
  }

  ngDoBootstrap() {}
}
