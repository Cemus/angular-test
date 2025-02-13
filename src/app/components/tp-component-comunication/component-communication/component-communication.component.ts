import { Component, Input } from '@angular/core';
import { ActiveUserComponent } from '../active-user/active-user.component';
import { UserDataComponent } from '../user-data/user-data.component';
import UserData from '../../../models/user-data.interface';
@Component({
  selector: 'app-component-communication',
  imports: [ActiveUserComponent, UserDataComponent],
  templateUrl: './component-communication.component.html',
  styleUrl: './component-communication.component.css',
})
export class ComponentCommunicationComponent {
  user: UserData = { name: 'Gérard', age: 28 };

  getData(newUser: UserData) {
    this.user = newUser;
  }
}
