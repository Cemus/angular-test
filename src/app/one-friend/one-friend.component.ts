import { Component, Input } from '@angular/core';
import { Friend } from '../models/friend.interface';
import { NgClass, NgFor, NgStyle } from '@angular/common';

@Component({
  selector: 'app-one-friend',
  imports: [NgFor, NgStyle, NgClass],
  templateUrl: './one-friend.component.html',
  styleUrl: './one-friend.component.css',
})
export class OneFriendComponent {
  @Input() friend!: Friend;

  oneFriendStyle = 'OFF';

  constructor() {
    Math.random() < 0.5
      ? (this.oneFriendStyle = 'OFF')
      : (this.oneFriendStyle = 'ON');
  }

  getColor() {
    return this.oneFriendStyle === 'ON' ? '#EC7C26' : '#A2231D';
  }
}
