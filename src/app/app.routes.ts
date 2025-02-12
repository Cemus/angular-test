import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ExercisesComponent } from './components/exercises/exercises.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { Composant0Component } from './components/nesting/composant-0/composant-0.component';
import { InterpolationComponent } from './components/interpolation/interpolation.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { BlogControlCenterComponent } from './components/blog/blog-control-center/blog-control-center.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'exercises', component: ExercisesComponent },
  { path: 'nesting', component: Composant0Component },
  { path: 'interpolation', component: InterpolationComponent },
  { path: 'data-binding', component: DataBindingComponent },
  { path: 'directives', component: DirectivesComponent },
  { path: 'blog', component: BlogControlCenterComponent },
];
