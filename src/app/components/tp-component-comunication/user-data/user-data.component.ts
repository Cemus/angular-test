import { Component, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import UserData from '../../../models/user-data.interface';

@Component({
  selector: 'app-user-data',
  imports: [FormsModule],
  templateUrl: './user-data.component.html',
  styleUrl: './user-data.component.css',
})
export class UserDataComponent {
  @Output() sendData: EventEmitter<UserData> = new EventEmitter();
  @Input() user!: UserData;

  name: string = '';
  age: number = 0;

  updateData(): void {
    if (this.name) {
      const newUser = { name: this.name, age: this.age };
      this.sendData.emit(newUser);
    } else {
      console.warn("Pas d'info");
    }
  }
}
