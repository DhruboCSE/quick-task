import { Component, inject, input } from '@angular/core';
import { User } from './../user/user.model';
import { TaskComponent } from './task/task.component';
import { Task } from './task/task.model';
import { NewTaskComponent } from './new-task/new-task.component';
import { UserService } from './../user/user.service';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  user = input.required<User>();
  isAddindTask = false;
  private userService= inject(UserService)

  addNewTask(task: Task) {
    this.userService.addTask(this.user().id, task);
    this.closeAddTaskDialog();
  }

  openAddTaskDialog() {
    this.isAddindTask = true;
  }
  closeAddTaskDialog() {
    this.isAddindTask = false;
  }
}
