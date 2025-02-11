import { Component } from '@angular/core';
import { ListFriendsComponent } from '../list-friends/list-friends.component';
import { OneFriendComponent } from '../one-friend/one-friend.component';

@Component({
  selector: 'app-interpolation',
  imports: [ListFriendsComponent],
  templateUrl: './interpolation.component.html',
  styleUrl: './interpolation.component.css',
})
export class InterpolationComponent {}
