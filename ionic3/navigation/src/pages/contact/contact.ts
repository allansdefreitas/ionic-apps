import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  name: 'contact-page-lazy'
})
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    //console.log(this.navParams);
    console.log(this.navParams.get('type'));
    console.log(this.navParams.data.type);

   this.navParams.data['showGreeting']();
    this.navParams.data.showGreeting();
  }

  pop(): void{
    this.navCtrl.pop();
  }
}
