import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Composant0Component } from './nesting/composant-0/composant-0.component';
import { InterpolationComponent } from './interpolation/interpolation.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'nesting', component: Composant0Component },
  { path: 'interpolation', component: InterpolationComponent },
];
