import { Component, inject } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { TasksComponent } from './tasks/tasks.component';
import { UserService } from './user/user.service';
import { User } from './user/user.model';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // constructor(private userService: UserService) {}
  private userService= inject(UserService)

  title = 'QuickTask';
  selectedUser?: User;
  get users() {
    return this.userService.getUsers();
  }

  onSelectedUser(user: User) {
    this.selectedUser = user;
  }
}
