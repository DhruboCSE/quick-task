import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from './../task/task.model';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  cancelAddingTask = output();
  newTask = output<Task>();
  title = signal('');
  summary = signal('');
  date = signal('');

  onCancel() {
    this.cancelAddingTask.emit();
  }
  onSubmit() {
    this.newTask.emit({
      id: uuidv4(),
      title: this.title(),
      summary: this.summary(),
      dueDate: new Date(this.date()),
      completed: false,
    });
  }
}
