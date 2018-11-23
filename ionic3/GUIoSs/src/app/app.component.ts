import { Component } from '@angular/core';
import { Platform, Config } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    public config: Config /* Injetando o Config */
    ) {

      /* Configurações: Atributo, valor
       c.f.: https://ionicframework.com/docs/api/config/Config/

       para já iniciar o app com as configurações desejadas,
       é necessário aplicar essas configurações aqui no app components..... */

      this.config.set('tabsPlacement', 'top');
      this.config.set('tabsLayout', 'icon-start');

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
