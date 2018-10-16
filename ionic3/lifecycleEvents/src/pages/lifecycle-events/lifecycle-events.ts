import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LifecycleEventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lifecycle-events',
  templateUrl: 'lifecycle-events.html',
})
export class LifecycleEventsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  // ionViewCanEnter(): boolean{
  //   console.log('1: ionViewCanEnter');
  //   return true;
  // }


  ionViewCanEnter(): Promise<any>{


    console.log('1: ionViewCanEnter');

    return new Promise ((resolve, reject) => {
      console.log('Aguardando 2 segundos...');

      /* Espera dois segundos (2000 milésimos de segundo), enquanto faz o cálculo....*/
      setTimeout(() =>{

        let number = Math.round(Math.random() * 100);

        /* Se o número for par (odd)*/
        if(number % 2 == 0){
          resolve();
          console.log(`${number} - Autorizado`);
        }else{
          console.log(`${number} - Rejeitado`);
          reject();
        }
      }
        , 2000)

    });


  }

  ionViewDidLoad() {
    console.log('2: ionViewDidLoad');

  }

  ionViewWillEnter(){
    console.log('3: ionViewWillEnter');

  }

  ionViewDidEnter(){
    console.log('4: ionViewDidEnter');

  }


  ionViewCanLeave(): Promise<any>{

    console.log('5: ionViewCanLeave');

    return new Promise ((resolve, reject) => {
      console.log('Aguardando 2 segundos...');

      /* Espera dois segundos (2000 milésimos de segundo), enquanto faz o cálculo....*/
      setTimeout(() =>{

        let number = Math.round(Math.random() * 100);

        /* Se o número for par (odd)*/
        if(number % 2 == 0){
          resolve();
          console.log(`${number} - Autorizado`);
        }else{
          console.log(`${number} - Rejeitado`);
          reject();
        }
      }
        , 2000)

    });

    // return false;
  }




  ionViewWillLeave(){
    console.log('6: ionViewWillLeave');

  }

  ionViewDidLeave(){
    console.log('7: ionViewDidLeave');

  }

  ionViewWillUnload(){
    console.log('8: ionViewWillUnload');

  }

  lifecycleVoltar(): void{
    this.navCtrl.pop()
    .then((authorizedToLeave: boolean) =>{

        if(authorizedToLeave){
          console.log("Autorizado a sair");
        }else{
          console.log("Não autorizado a sair")
        }

    }).catch(error => {

      console.log("Erro", error);

    });

  }



}
