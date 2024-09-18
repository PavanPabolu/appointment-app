import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit{

  todoList: string[] = [];
  newtodo: string = "";

  ngOnInit(): void {
    this.todoList = ["Task 1",  "Task 2", "Task 3"];
  }

  removetodo(name : string){
    this.todoList = this.todoList.filter(value => value!=name);
  }

  addtodo(){
    // alert(this.newtodo)
    if(this.newtodo.trim().length){
      this.todoList.push(this.newtodo);
      this.newtodo="";
    }
    else{
      alert("Please enter proper value..");
    }

  }

}
