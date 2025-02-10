import { Component, Input } from '@angular/core';
import { Friend } from '../models/friend.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-one-friend',
  imports: [CommonModule],
  templateUrl: './one-friend.component.html',
  styleUrl: './one-friend.component.css',
})
export class OneFriendComponent {
  @Input() friend!: Friend;
}
