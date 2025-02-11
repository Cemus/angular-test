import { Component } from '@angular/core';
import { Composant4Component } from '../composant-4/composant-4.component';
import { Composant5Component } from '../composant-5/composant-5.component';
import { Composant6Component } from '../composant-6/composant-6.component';

@Component({
  selector: 'app-composant-3',
  imports: [Composant4Component, Composant5Component, Composant6Component],
  templateUrl: './composant-3.component.html',
  styleUrl: './composant-3.component.css',
})
export class Composant3Component {}
