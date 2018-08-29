import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage({
  name: 'home-page-lazy'
})

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  push(): void {
      this.navCtrl.push('contact-page-lazy');

  }

  setRoot(): void{
    this.navCtrl.setRoot('contact-page-lazy');
    }

}
