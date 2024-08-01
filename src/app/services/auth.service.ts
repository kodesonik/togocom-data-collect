import { Injectable } from '@angular/core';
import {
  Auth,
  authState,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    // Add the AngularFireAuth service
    private auth: Auth
  ) {}

  // Listen for auth state changes
  get isAuth() {
    return authState(this.auth);
  }

  // Add the loginWithEmail method
  async loginWithEmail(email: string, password: string) {
    // Add the loginWithEmail method
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  // Add the logout method
  async logout() {
    return signOut(this.auth);
  }
}
