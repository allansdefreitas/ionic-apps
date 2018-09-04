import { Component } from '@angular/core';
import { NavController, IonicPage, Loading, LoadingController } from 'ionic-angular';

import { Task } from '../../models/task.model';
import { TaskService } from '../../providers/task/task.service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public loadingCtrl: LoadingController,
    public navCtrl: NavController,
    public taskService: TaskService
  ) {}


  tasks: Task[] = [];

  ionViewDidLoad(){

      this.taskService.getAll()
        .then ( (tasks: Task[]) =>{
            this.tasks = tasks;
        });

  }

  private showLoading(message?: string): Loading {

    let loading: Loading = this.loadingCtrl.create({
        content: message || 'please wait....'
    });

    loading.present();

    return loading;
  }

  private showAlert()...

}
