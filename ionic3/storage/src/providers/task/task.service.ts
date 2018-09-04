import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Task } from '../../models/task.model';

@Injectable()
export class TaskService {

  constructor(public storage: Storage){

  }

  getAll(reverse: boolean): Promise<Task[]>{

    return this.storage.ready()

      .then( (localForage: LocalForage) => {

        let tasks: Task[] = [];

        return this.storage.forEach( (task: Task, key: string, interationNumber: number) =>{
          if (key.indexOf('tasks.') > -1 ){
            tasks.push(task);
          }


        }).then( () => (!reverse) ? tasks : tasks.reverse() ); /* Mostrar sempre as mais recentes no topo da lista */


      }).catch( err => {

        console.log('Erro ao abrir o storage: ', err );
        return Promise.reject(err);

      });
  }


  getById(id: number): Promise<Task> {

    return this.storage.get('tasks.${id}'); /* tasks.0928323 */
  }

  /*  Os dois métodos abaixo fazem a mesma coisa.. ;)
      A presença dos dois é meramente didática, pois
      poderia ser apenas um método com o nome save, por exemplo */


  save(task: Task): Promise<Task> {

    return this.storage.set('tasks.${task.id}', task);
  }

  update(task: Task): Promise<Task> {

    return this.save(task);
  }


  delete(id: number): Promise<boolean> {

    return this.storage.remove('tasks.${id}')

    .then(() => true);
  }
  // delete(id: number): Promise<Task> {

  //     return this.storage.remove(
  //         this.getById(number).id

  //     )

  // }

}
