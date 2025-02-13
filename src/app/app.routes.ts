import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ExercisesComponent } from './components/exercises/exercises.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { Composant0Component } from './components/nesting/composant-0/composant-0.component';
import { InterpolationComponent } from './components/interpolation/interpolation.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { BlogControlCenterComponent } from './components/blog/blog-control-center/blog-control-center.component';
import { ApiComponent } from './components/api/api.component';
import { FirebaseComponent } from './components/firebase/firebase.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { AuthGuardService } from './services/auth/auth-guard.service';
import { ComponentCommunicationComponent } from './components/tp-component-comunication/component-communication/component-communication.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'exercises',
    canActivate: [AuthGuardService],
    component: ExercisesComponent,
  },
  { path: 'nesting', component: Composant0Component },
  { path: 'interpolation', component: InterpolationComponent },
  { path: 'data-binding', component: DataBindingComponent },
  { path: 'directives', component: DirectivesComponent },
  { path: 'blog', component: BlogControlCenterComponent },
  { path: 'api', component: ApiComponent },
  { path: 'firebase', component: FirebaseComponent },
  { path: 'app-login', component: LoginPageComponent },
  { path: 'app-register', component: RegisterPageComponent },
  { path: 'component-com', component: ComponentCommunicationComponent },
];
