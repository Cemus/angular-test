import { Component, Input } from '@angular/core';
import UserData from '../../../models/user-data.interface';

@Component({
  selector: 'app-active-user',
  imports: [],
  templateUrl: './active-user.component.html',
  styleUrl: './active-user.component.css',
})
export class ActiveUserComponent {
  @Input() user!: UserData;
}
