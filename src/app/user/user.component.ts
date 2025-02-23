import { Component, input, computed, output } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  user = input.required<User>();
  select = output<User>();
  selected = input.required<Boolean>();

  avatarSrc = computed(() => 'assets/users/' + this.user().avatar);
  name = computed(() => this.user().name);
  
  onSelectedUser() {;
    this.select.emit(this.user());
  }
}
