import { Injectable } from '@angular/core';
//? @Injectable(): rend la classe injectable.
@Injectable({
  //? providedIn: 'root': indique que le service est disponible dans toute l'application en tant que singleton.
  providedIn: 'root',
})
export class LoggerService {
  constructor() {}

  log(message: string): void {
    console.log(message);
  }

  logErrorCustom(message: string): void {
    this.log(message);
    const date = new Date().toISOString();
    console.error(`
      Date Error:---------------------
      [${date}]
      Message ------------------------
      ${message}
      Stack: ------------
      ${new Error().stack}`);
    // go insert en BDD
  }

  warn(message: string): void {
    console.warn(message);
  }
}
