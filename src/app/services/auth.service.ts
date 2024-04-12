import { Injectable, inject } from "@angular/core";
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "@angular/fire/auth";
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

  
  login(email: string, pass: string): Observable<void>{
    const promise = signInWithEmailAndPassword(
      this.firebaseAuth,
      email,
      pass
    ).then(()=>{});
    return from(promise)
  }

  isLoggedIn(): boolean{
    return true
  }
}