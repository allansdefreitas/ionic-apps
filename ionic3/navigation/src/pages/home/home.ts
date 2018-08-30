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
      this.navCtrl.push('contact-page-lazy', {
        type: 'push',
        course: 'ionic3',
        ShowGreeting: () => {
          console.log('Welcome, ionic 3 student!!!');
        }
      });

  }

  setRoot(): void{
    this.navCtrl.setRoot('contact-page-lazy',{
      type: 'setRoot'
    });
    }

}
