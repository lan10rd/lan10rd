import { NgModule, Injector } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { createCustomElement } from '@angular/elements'
import { HttpClientModule } from '@angular/common/http'

import { 
  CommonNgSelectElement, CommonNgSelectElementModule,
  CommonNgButtonElement, CommonNgButtonElementModule,
  CommonNgPopopElement, CommonNgPopopElementModule,
  CommonNgThemesElement, CommonNgThemesElementModule,
} from '@grams/common/ng'

@NgModule
({
  imports: [BrowserModule, HttpClientModule, CommonNgSelectElementModule, CommonNgButtonElementModule, CommonNgPopopElementModule, CommonNgThemesElementModule, ],
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
    const customPopop = createCustomElement(CommonNgPopopElement, {injector: injector})
    customElements.get('common-ng-popop-element-wc') || customElements.define('common-ng-popop-element-wc', customPopop)
    const customThemes = createCustomElement(CommonNgThemesElement, {injector: injector})
    customElements.get('common-ng-themes-element-wc') || customElements.define('common-ng-themes-element-wc', customThemes)
  }

  ngDoBootstrap() {}
}
