import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular'; /* tirar o /umd
se não tirar o /umd: Cannot find module "." ;) */
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TaskService } from '../providers/task/task.service';

@NgModule({
  declarations: [
    MyApp,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: 'myAppDatabase',
      storeName: 'tasks',
      driverOrder: ['sqlite', 'indexeddb', 'websql', 'localstorage'] /* ordem default */
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TaskService
  ]
})
export class AppModule {}
