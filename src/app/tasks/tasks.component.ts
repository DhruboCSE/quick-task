import { Component, input } from '@angular/core';
import { User } from './../user/user.model';
import { TaskComponent } from "./task/task.component";
import { Task } from './task/task.model';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})

export class TasksComponent {
  user = input.required<User>();

  onCompleteTask(task: Task) {
    this.user().tasks = this.user().tasks.filter(t => t.id !== task.id)
  }

  openAddTaskDialog() {
    // Open dialog to add task
  }
}
