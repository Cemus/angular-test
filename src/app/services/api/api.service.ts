import { Injectable } from '@angular/core';
import { Card } from '../../models/card.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl =
    'https://db.ygoprodeck.com/api/v7/cardinfo.php?&startdate=2023-01-01&enddate=2024-08-23&dateregion=tcg';

  async fetchCards(): Promise<any> {
    const url = this.apiUrl;
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();

      return json.data;
    } catch (error: any) {
      console.error(error.message);
    }
  }

  formatData(data: any): Card[] {
    return data.map((card: any) => ({
      id: card.id,
      name: card.name,
      image: card.card_images[0].image_url,
      level: card.level,
    }));
  }
}
