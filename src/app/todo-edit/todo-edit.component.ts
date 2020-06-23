import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css'],
})
export class TodoEditComponent implements OnInit {
  @Input() todos: Task;
  constructor(private taskService: TaskService) {}

  updateTodos() {
    this.taskService.updateTodos(this.todos.id, this.todos.value);
  }

  deleteTodos() {
    this.taskService.deleteTodos(this.todos.id);
    this.todos = null;
  }
  ngOnInit(): void {}
}
