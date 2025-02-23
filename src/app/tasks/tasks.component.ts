import { Component, input } from '@angular/core';
import { User } from './../user/user.model';
import { TaskComponent } from './task/task.component';
import { Task } from './task/task.model';
import { NewTaskComponent } from './new-task/new-task.component';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  user = input.required<User>();
  isAddindTask = false;

  onCompleteTask(task: Task) {
    this.user().tasks = this.user().tasks.filter((t) => t.id !== task.id);
  }

  addNewTask(task: Task) {
    this.user().tasks.push(task);
    this.closeAddTaskDialog();
  }

  openAddTaskDialog() {
    this.isAddindTask = true;
  }
  closeAddTaskDialog() {
    this.isAddindTask = false;
  }
}
