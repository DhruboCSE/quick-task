import { Component, input, inject } from '@angular/core';
import { CardComponent } from "../../shared/card/card.component";
import { Task } from './task.model';
import { DatePipe } from '@angular/common';
import { UserService } from './../../user/user.service';

@Component({
  selector: 'app-task',
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  task = input.required<Task>();
  userID = input.required<string>();
  private userService= inject(UserService);

  onCompleted() {
    this.userService.removeTask(this.userID(), this.task().id);
  }
}
