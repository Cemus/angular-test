import { Component, inject } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

interface Item {
  name: string;
}

@Component({
  selector: 'app-firebase',
  imports: [],
  templateUrl: './firebase.component.html',
  styleUrl: './firebase.component.css',
})
export class FirebaseComponent {
  auth = getAuth();
}
