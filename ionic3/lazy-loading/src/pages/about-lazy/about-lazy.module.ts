import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AboutLazyPage } from './about-lazy';

@NgModule({
  declarations: [
    AboutLazyPage,
  ],
  imports: [
    IonicPageModule.forChild(AboutLazyPage),
  ],
})
export class AboutLazyPageModule {}
