import { Component } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Task } from '../models/Task';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  private todo : FormGroup;
  private task: Task = new Task();

  constructor( private formBuilder: FormBuilder ) {

    this.todo = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    });  
  }

  logForm(){
    console.log(this.todo.valid)

    console.log(this.todo.value);
    
    this.task = this.todo.value;
    
    console.log(this.task)
    
  }
}