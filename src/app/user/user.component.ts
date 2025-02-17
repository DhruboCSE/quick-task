import { Component, input, computed, output } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  id = input.required<string>();
  avatar = input.required<string>();
  name = input.required<string>();
  select = output<string>();

  avatarSrc = computed(() => 'assets/users/' + this.avatar());
  onSelectedUser() {;
    this.select.emit(this.id());
  }
}
