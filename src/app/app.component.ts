import { Component } from '@angular/core';
import { AuthService } from './auth.service';
/* import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs'; */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Task 1 - TODO - CRUD';

  //todo
  /* taskValue = '';
  tasks: Observable<any[]>; */
  constructor(
    public authService: AuthService /*todo list*/
  ) /*  public db: AngularFireDatabase */ {
    /*  this.tasks = db.list('tasks').valueChanges(); */
  }
  //todo
  /* onSubmit() {
    this.db.list('tasks').push({ content: this.taskValue });
    this.taskValue = '';
  } */
}
