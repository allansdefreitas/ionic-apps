import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AboutLazyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name:'about-page',
  segment:'about-page-url/:id',
  defaultHistory:['HomePage'],
  priority: 'low'
})
@Component({
  selector: 'page-about-lazy',
  templateUrl: 'about-lazy.html',
})
export class AboutLazyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('Registro ID:', this.navParams.get('id'));
  }

}
