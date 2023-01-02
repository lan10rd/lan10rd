import { AppComponent } from './app.component';
import { APP_INITIALIZER, NgModule } from '@angular/core'
import { CommonAppModule } from '@grams/common/ng'
import { AppInitService } from './init/init.service'

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonAppModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (appInit: AppInitService) => { return (): Promise<any> => { return appInit.initialize() } },
      multi: true,
      deps: [AppInitService]
  },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
