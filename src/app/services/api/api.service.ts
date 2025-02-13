import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl =
    'https://db.ygoprodeck.com/api/v7/cardinfo.php?language=fr&num=5&offset=0&sort=new';
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
}
