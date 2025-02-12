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
    this.generatePeople(),
    this.generatePeople(),
    this.generatePeople(),
  ];
  strangers: Friend[] = [];

  generatePeople() {
    const gender = this.generateGender();
    const firstname = this.generateFirstname(gender);
    const passions = this.generatePassions();
    const bio = this.generateBio(gender, passions);
    const age = this.generateAge();
    const fame = this.generateFame();
    const imageUrl = `https://picsum.photos/${Math.floor(
      Math.random() * 500
    )}/`;

    return {
      name: firstname,
      online: true,
      bio: bio,
      passions: passions,
      fame: fame,
      age: age,
      imageUrl: imageUrl,
    };
  }

  generateAge() {
    return Math.floor(Math.random() * (82 - 18 + 1)) + 18;
  }

  generateFame() {
    return Math.floor(Math.random() * 100);
  }

  generateFirstname(gender: string) {
    const names =
      gender === 'Homme' ? this.maleFirstnames : this.femaleFirstnames;
    return names[Math.floor(Math.random() * names.length)];
  }

  generateGender() {
    return Math.random() > 0.5 ? 'Homme' : 'Femme';
  }

  generateBio(gender: string, passions: string[]) {
    const pronoun = gender === 'Homme' ? 'un' : 'une';
    return `Je suis ${pronoun} grand${
      gender === 'Homme' ? '' : 'e'
    } fan de ${passions[0].toLocaleLowerCase()}. ${
      passions[1]
        ? "J'aimerais rencontrer quelqu'un qui apprécie aussi tout ce qui est " +
          passions[1].toLocaleLowerCase()
        : ''
    }`;
  }

  generatePassions() {
    const passions: string[] = [];
    const allPassions: string[] = [
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

    const passionNumber: number = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    for (let index = 0; index < passionNumber; index++) {
      const passion = allPassions[index];
      passions.push(passion);
    }
    return passions;
  }

  add(name: string): void {
    const passions = this.generatePassions();
    console.log(passions);
    this.friends.push({
      name: name,
      online: true,
      bio: this.generateBio(this.generateGender(), passions),
      passions: passions,
      fame: this.generateFame(),
      age: this.generateAge(),
      imageUrl: `https://picsum.photos/456/`,
    });
  }
}
