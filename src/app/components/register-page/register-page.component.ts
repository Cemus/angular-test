import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import { createUserWithEmailAndPassword } from 'firebase/auth';

@Component({
  selector: 'app-register-page',
  imports: [FormsModule, NgIf],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css',
})
export class RegisterPageComponent {
  email: string = '';
  password: string = '';
  user: any = null;
  error: string | null = null;

  private auth: Auth = inject(Auth);

  constructor() {}

  signUp() {
    createUserWithEmailAndPassword(this.auth, this.email, this.password)
      .then((userCredential) => {
        this.user = userCredential.user;
        console.log('Utilisateur inscrit:', userCredential);
        console.log('Utilisateur inscrit:', this.user);
      })
      .catch((error) => {
        this.error = error.message;
        console.error("Erreur d'inscription:", error);
      });
  }
}
