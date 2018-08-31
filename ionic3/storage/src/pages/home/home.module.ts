import { NgModule } from '@angular/core';

import { HomePage } from './home';
import { IonicPageModule } from 'ionic-angular'; // sempre tirar o /umd, porque ocasiona erro ;)

@NgModule({
  imports: [
    IonicPageModule.forChild(HomePage)
  ],
  exports: [],
  declarations: [
    HomePage
  ],
  providers: [],
})
export class HomeModule { }
