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
        year: 2018, // FUNCIONA COM O ATRIBUTO year AQUI
        course: 'ionic3',
        showGreeting: () => {
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
