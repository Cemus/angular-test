import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { RouterLink } from '@angular/router';
import { signOut } from 'firebase/auth';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink, NgIf],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
  currentUser: any = null;

  constructor(private auth: Auth) {
    // Vérifier si un utilisateur est connecté
    this.auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        this.currentUser = user.email; // Ou utilisez `user.displayName` si disponible
      } else {
        this.currentUser = null;
      }
    });
  }
  async disconnect(): Promise<void> {
    try {
      await signOut(this.auth);
      this.currentUser = null;
    } catch (error) {
      console.error('Erreur lors de la déconnexion :', error);
    }
  }
}
