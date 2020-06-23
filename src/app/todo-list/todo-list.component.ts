import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { TaskService } from '../task.service';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  //todo
  todoValue = '';
  todos: Observable<any[]>;
  constructor(
    public authservice: AuthService,
    private router: Router,
    public db: AngularFireDatabase,
    private taskService: TaskService
  ) {
    /* this.todos = db.list('todos').valueChanges(); */
  }
  createTodos() {
    this.taskService.createTodos(this.todoValue);
    console.log(this.todoValue);
  }
  //TODO
  /* onSubmit() {
    this.db.list('todos').push({ value: this.todoValue });
    this.todoValue = '';
  } */
  ngOnInit(): void {}
}
