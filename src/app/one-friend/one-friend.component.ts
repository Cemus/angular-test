import { Component, Input, OnInit } from '@angular/core';
import { Friend } from '../models/friend.interface';
import { NgClass, NgFor, NgStyle } from '@angular/common';

@Component({
  selector: 'app-one-friend',
  imports: [NgFor, NgStyle, NgClass],
  templateUrl: './one-friend.component.html',
  styleUrl: './one-friend.component.css',
})
export class OneFriendComponent implements OnInit {
  @Input() friend!: Friend;

  ngOnInit(): void {
    Math.random() < 0.5
      ? (this.friend.online = false)
      : (this.friend.online = true);
  }

  getColor() {
    return this.friend.online === true ? 'green' : 'red';
  }
}
