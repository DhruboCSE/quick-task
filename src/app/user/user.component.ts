import { Component, input, computed, output } from '@angular/core';
import { User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-user',
  imports: [CardComponent],
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
