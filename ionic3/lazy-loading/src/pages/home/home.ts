import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';


@IonicPage({
  // segment: 'home-page-url',
  priority: 'high'

})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  onAbout(): void{
    this.navCtrl.push('about-page',{
      id: 20,
    });
  }

  onList():void{
    this.navCtrl.push('list-page');
  }

}
