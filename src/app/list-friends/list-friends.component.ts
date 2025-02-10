import { Component } from '@angular/core';
import { OneFriendComponent } from '../one-friend/one-friend.component';
import { Friend } from '../models/friend.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-friends',
  imports: [CommonModule, OneFriendComponent],
  templateUrl: './list-friends.component.html',
  styleUrl: './list-friends.component.css',
})
export class ListFriendsComponent {
  randomized(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  friends: Friend[] = [
    {
      name: 'Jean',
      status: 'En ligne',
      bio: 'Blablablablablabla',
      passions: ['Ballon rond', 'Jeu de rôle japonais', 'La lessive'],
      reputation: 'Cool',
      age: (): string => {
        const random = this.randomized(19, 58);
        return `${random.toString()} ans`;
      },
    },
    {
      name: 'Vanessa',
      status: 'Hors ligne',
      bio: 'Blablablablablabla',
      passions: ['Les chiens', 'Les chats', 'Les rats'],
      reputation: 'Sereine',
      age: (): string => {
        const random = this.randomized(19, 58);
        return `${random.toString()} ans`;
      },
    },
    {
      name: 'Paul',
      status: 'Hors ligne',
      bio: 'Blablablablablabla',
      passions: ['La tarte', 'Les bardes', 'Les barques'],
      reputation: 'Dur',
      age: (): string => {
        const random = this.randomized(19, 58);
        return `${random.toString()} ans`;
      },
    },
  ];
}
