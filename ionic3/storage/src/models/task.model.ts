export class Task{

public id: number;
public done: boolean;

  constructor(titulo: String){

    this.id = new Date().getTime();
    this.done = false;
  }

}
