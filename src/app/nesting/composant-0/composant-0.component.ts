import { Component } from '@angular/core';
import { Composant1Component } from '../composant-1/composant-1.component';

@Component({
  selector: 'app-composant-0',
  imports: [Composant1Component],
  templateUrl: './composant-0.component.html',
  styleUrl: './composant-0.component.css',
})
export class Composant0Component {}
