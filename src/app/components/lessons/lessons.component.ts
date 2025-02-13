import { Component } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-lessons',
  imports: [],
  templateUrl: './lessons.component.html',
  styleUrl: './lessons.component.css',
})
export class LessonComponent {
  private premiereSubscription: Subscription;
  laSource = interval(1000); // L'observable c'est LUI !
  currentValue: number = 0; // Stocke la valeur courante

  constructor() {
    this.premiereSubscription = new Subscription(); // Initialisation ici
  }

  ngOnInit() {
    // Souscription à l'observable
    this.premiereSubscription = this.laSource.subscribe((count) => {
      this.currentValue = count;
      console.log(count); // Affiche dans la console
    });
  }

  ngOnDestroy() {
    // Résiliation de la souscription
    this.premiereSubscription.unsubscribe();
    console.log('Observable détruit');
  }
}
