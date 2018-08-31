import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private storage: Storage) {


  }

  ionViewWillEnter(){

    this.storage.set('name', 'Peter');

    console.log( 'driver: '+ this.storage.driver);


  }

  ionViewDidLoad(){

    this.storage.get('name').then(
      (val) => {
        console.log('your name is: '+ val);

      }
    );

  }

}
