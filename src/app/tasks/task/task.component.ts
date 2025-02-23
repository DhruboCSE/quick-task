import { Component, input, output } from '@angular/core';
import { CardComponent } from "../../shared/card/card.component";
import { Task } from './task.model';

@Component({
  selector: 'app-task',
  imports: [CardComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  task = input.required<Task>();
  complete = output<Task>();

  onCompleted() {
    this.complete.emit(this.task());
  }
}
