import { Component, OnInit } from '@angular/core';
import { OneFriendComponent } from '../one-friend/one-friend.component';
import { Friend } from '../models/friend.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-friends',
  imports: [CommonModule, OneFriendComponent],
  templateUrl: './list-friends.component.html',
  styleUrl: './list-friends.component.css',
})
export class ListFriendsComponent implements OnInit {
  randomized(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  isDisabled = false;
  ngOnInit(): void {
    setTimeout(() => {
      this.isDisabled = true;
    }, 3000);
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
      imageUrl: `https://picsum.photos/200`,
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
      imageUrl: `https://picsum.photos/456/`,
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
      imageUrl: `https://picsum.photos/789`,
    },
  ];
}
