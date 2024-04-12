import { Injectable, inject } from "@angular/core";
import { Auth, createUserWithEmailAndPassword, updateProfile } from "@angular/fire/auth";
import { Observable, from } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
  firebaseAuth = inject(Auth);

  register(
    email: string,
    username: string,
    senha: string
  ): Observable<void> {
    const promise =  createUserWithEmailAndPassword(
      this.firebaseAuth, email, senha)
      .then(res => updateProfile(res.user, { displayName: username }));

    return from(promise);
  }

  isLoggedIn(): boolean{
    return false
  }
}