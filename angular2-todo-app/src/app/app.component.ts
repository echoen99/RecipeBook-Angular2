import { Component } from '@angular/core';
import { TodoComponent } from './todo/todo.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  name='Yosi';
  yosiColor='blue';

  changeColor() {
    this.yosiColor= this.yosiColor==='blue' ? 'red' : 'blue';
  }

}
