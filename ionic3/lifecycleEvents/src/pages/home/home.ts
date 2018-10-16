import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LifecycleEventsPage } from '../lifecycle-events/lifecycle-events';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }


  lifecycle(): void{

    this.navCtrl.push(LifecycleEventsPage)
    .then((autorizhedAccess: boolean) => {

      if(autorizhedAccess){
        console.log("Page pushed (Autorizado)");
      }else{
        console.log("Page NOT  pushed (Rejeitado)");
      }

    }).catch(error => {
      console.log("Page NOT pushed (Acesso não autorizado)", error);
    });

  }

}
