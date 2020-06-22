import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authState: any = null;

  constructor(private firebaseAuth: AngularFireAuth, private router: Router) {
    this.firebaseAuth.authState.subscribe((auth) => {
      this.authState = auth;
    });
  }
  //FIREBASE GET METHOD FUNCTIONS
  get currentUserId(): string {
    return this.authState !== null ? this.authState.uid : '';
  }

  get currentUserName(): string {
    return this.authState['email'];
  }

  registerWithEmail(email: string, password: string) {
    return this.firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState = user;
      })
      .catch((error) => {
        console.log(error);
        throw error;
      });
  }

  loginWithEmail(email: string, password: string) {
    return this.firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState = user;
      })
      .catch((error) => {
        console.log(error);
        throw error;
      });
  }

  signOut(): void {
    this.firebaseAuth.signOut();
    this.router.navigate(['/login']);
  }

  //BACKUP CODE
  /* user: Observable<firebase.User>;
  constructor(private firebaseAuth: AngularFireAuth, private router: Router) {
    this.user = firebaseAuth.authState;
  }

  async register(email: string, password: string) {
    try {
      await this.firebaseAuth.createUserWithEmailAndPass(email, password);

      console.log('Successful Creation of Account');
    } catch (error) {
      console.log('Something went wrong', error.message);
    }
  }

  async login(email: string, password: string) {
    try {
      await this.firebaseAuth.createUserWithEmailAndPass(email, password);
      console.log('Logged In!');
      this.router.navigate(['to-do']);
    } catch (error) {
      console.log('Something went wrong', error.message);
    }
  }
  async logout() {
    this.firebaseAuth.signOut();
    this.router.navigate(['login']);
  } */
}
