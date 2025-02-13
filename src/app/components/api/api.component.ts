import { Component } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { NgFor, NgIf } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { Card } from '../../models/card.interface';

@Component({
  selector: 'app-api',
  imports: [NgFor, CardComponent, NgIf],
  templateUrl: './api.component.html',
  styleUrl: './api.component.css',
})
export class ApiComponent {
  cards: Card[] = [];
  isLoading: boolean = false;
  errorMessage: string = '';

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.loadAPI();
  }

  loadAPI(): void {
    this.api
      .fetchCards()
      .then((data) => {
        console.log(data);
        this.cards = data.map((card: any) => ({
          id: card.id,
          name: card.name,
          image: card.card_images[0].image_url,
        }));
        console.log(this.cards);
        this.isLoading = false;
      })
      .catch((error) => {
        this.errorMessage = error.message;
        this.isLoading = false;
      });
  }
}
