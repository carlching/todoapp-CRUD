import { Component, OnInit } from '@angular/core';
import { TaskMain } from '../taskmain';
import { Observable } from 'rxjs';
import { TaskService } from '../task.service';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  public todose: Observable<any[]>;

  selectedTaskMain: TaskMain;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.todose = this.taskService.readTodos();
    console.log(this.todose);
  }
  selectTaskMain(todos: TaskMain): void {
    this.selectedTaskMain = todos;
  }
}
