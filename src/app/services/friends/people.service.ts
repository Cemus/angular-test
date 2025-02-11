import { Injectable } from '@angular/core';
import { Friend } from '../../models/friend.interface';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  maleFirstnames: string[] = ['Paul', 'Jean', 'Maximus', 'Jordy'];
  femaleFirstnames: string[] = [
    'Marie',
    'Vanessa',
    'Paulette',
    'Christiane',
    'Lucie',
    'Marjolène',
    'Sophia',
  ];
  friends: Friend[] = [
    {
      name: 'Jean',
      online: true,
      bio: 'Blablablablablabla',
      passions: ['Ballon rond', 'Jeu de rôle japonais', 'La lessive'],
      reputation: 'Cool',
      age: 22,
      imageUrl: `https://picsum.photos/200`,
    },
    {
      name: 'Vanessa',
      online: true,
      bio: 'Blablablablablabla',
      passions: ['Les chiens', 'Les chats', 'Les rats'],
      reputation: 'Sereine',
      age: 19,
      imageUrl: `https://picsum.photos/456/`,
    },
    {
      name: 'Paul',
      online: true,
      bio: 'Blablablablablabla',
      passions: ['La tarte', 'Les bardes', 'Les barques'],
      reputation: 'Dur',
      age: 44,
      imageUrl: `https://picsum.photos/789`,
    },
  ];
  strangers: Friend[] = [];
  constructor() {}

  generateFirstname() {}

  generateGender() {
    return Math.random() > 0.5 ? 'Homme' : 'Femme';
  }

  generateBio(gender: string, passions: string[]) {
    const pronoun = gender === 'Homme' ? 'un' : 'une';
    return `Je suis ${pronoun} grand${
      gender === 'Homme' ? '' : 'e'
    } fan de ${passions[0].toLocaleLowerCase()} et de ${passions[1].toLocaleLowerCase()}. J'aimerais rencontrer quelqu'un qui apprécie ${passions[2].toLocaleLowerCase()}`;
  }

  generatePassion() {
    return [
      'Balade à vélo',
      'Balade en voiture',
      'Balade à cheval',
      'Tennis',
      'Ping-pong',
      'Jeux-vidéos',
      'Lecture',
      'Les grosses voitures',
      'Les échecs',
      'Le fromage',
      'La planche à voile',
      'La cuisine',
    ];
  }

  add(name: string): void {
    this.friends.push({
      name: name,
      online: true,
      bio: 'Blablablablablabla',
      passions: ['Le néant'],
      reputation: 'Sereine',
      age: 24,
      imageUrl: `https://picsum.photos/456/`,
    });
  }
}
