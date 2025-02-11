import { Injectable } from '@angular/core';
import { Friend } from './models/friend.interface';

@Injectable({
  providedIn: 'root',
})
export class FriendsService {
  constructor() {}
  friends: Friend[] = [
    {
      name: 'Jean',
      status: 'En ligne',
      bio: 'Blablablablablabla',
      passions: ['Ballon rond', 'Jeu de rôle japonais', 'La lessive'],
      reputation: 'Cool',
      age: 22,
      imageUrl: `https://picsum.photos/200`,
    },
    {
      name: 'Vanessa',
      status: 'Hors ligne',
      bio: 'Blablablablablabla',
      passions: ['Les chiens', 'Les chats', 'Les rats'],
      reputation: 'Sereine',
      age: 19,
      imageUrl: `https://picsum.photos/456/`,
    },
    {
      name: 'Paul',
      status: 'Hors ligne',
      bio: 'Blablablablablabla',
      passions: ['La tarte', 'Les bardes', 'Les barques'],
      reputation: 'Dur',
      age: 44,
      imageUrl: `https://picsum.photos/789`,
    },
  ];

  addFriend(name: string): void {
    this.friends.push({
      name: name,
      status: 'Hors ligne',
      bio: 'Blablablablablabla',
      passions: ['Le néant'],
      reputation: 'Sereine',
      age: 24,
      imageUrl: `https://picsum.photos/456/`,
    });
  }
}
