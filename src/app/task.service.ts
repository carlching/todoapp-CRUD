import { Injectable } from '@angular/core';
import { AngularFireObject } from '@angular/fire/database';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  todos: Observable<any[]>;

  constructor(private db: AngularFireDatabase) {}

  //FIREBASE CRUD FUNCTION
  createTodos(todos: any) {
    this.db.list('todos').push(todos);
  }

  readTodos() {
    this.todos = this.db
      .list('todos')
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((item) => ({
            id: item.payload.key,
            ...(item.payload.val() as {}),
          }))
        )
      );
    return this.todos;
  }

  updateTodos(id: any, value: any) {
    this.db.list('todos').set(id, { value: this.todos });
  }

  deleteTodos(id: any) {
    this.db.list('todos').remove(id);
  }
}
