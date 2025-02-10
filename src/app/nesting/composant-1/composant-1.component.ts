import { Component } from '@angular/core';
import { Composant2Component } from '../composant-2/composant-2.component';
import { Composant3Component } from '../composant-3/composant-3.component';

@Component({
  selector: 'app-composant-1',
  imports: [Composant2Component, Composant3Component],
  templateUrl: './composant-1.component.html',
  styleUrl: './composant-1.component.css',
})
export class Composant1Component {}
