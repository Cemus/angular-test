import { Component } from '@angular/core';
import { Friend } from '../models/friend.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-one-friend',
  imports: [CommonModule],
  templateUrl: './one-friend.component.html',
  styleUrl: './one-friend.component.css',
})
export class OneFriendComponent {
  friend: Friend = {
    name: 'Jean',
    status: 'En ligne',
    bio: 'Blablablablablabla',
    passions: ['Ballon rond', 'Jeu de rôle japonais', 'La lessive'],
    reputation: 'cool',
    age: (): string => {
      const random = Math.floor(Math.random() * 3);
      return random > 1 ? '50 balais' : '19 ans';
    },
  };
}
