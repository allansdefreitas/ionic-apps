import { NgModule } from '@angular/core';
import { BoxComponent } from './box/box';
import { IonicModule } from 'ionic-angular';


@NgModule({
	imports: [IonicModule],
  declarations: [BoxComponent],
	exports: [BoxComponent]
})
export class ComponentsModule {}
