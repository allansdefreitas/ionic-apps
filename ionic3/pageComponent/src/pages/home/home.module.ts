import { NgModule } from '@angular/core';

import { HomePage } from './home';
import { ComponentsModule } from '../../components/components.module';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(HomePage)
  ],
  exports: [],
  providers: [],
})
export class HomePageModule { }
