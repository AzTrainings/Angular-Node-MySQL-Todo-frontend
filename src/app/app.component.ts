import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  inputText = '';

  todoItems: any  = [];

  constructor(
    private http:HttpClient
  ){

    this.loadData();
  }

  loadData(){

   this.http.get('http://localhost:3000/get_todo_list')
   .subscribe((response)=>{

    this.todoItems =  response

   })

  }

  create(){
    this.todoItems.unshift({data: this.inputText, date_time: 'Few seconds ago'});
    this.inputText = '';
  }
}
