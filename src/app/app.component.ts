import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  inputText = '';

  todoItems  = [
    {
      data: 'Pick milk from shop.', date_time: '10 minutes ago'
    },
    {
      data: 'Go to school.', date_time: '2 minutes ago'
    },
    {
      data: 'Go to the gym.', date_time: '1 minutes ago'
    }


  ];


  create(){
    this.todoItems.unshift({data: this.inputText, date_time: 'Few seconds ago'});
    this.inputText = '';
  }
}
