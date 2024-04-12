import { Injectable, inject, signal } from "@angular/core";
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile, user } from "@angular/fire/auth";
import { Observable, from } from "rxjs";
import { UserInterface } from "../models/user.interface";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
  firebaseAuth = inject(Auth);
  user$ = user(this.firebaseAuth);
  currentUserSig = signal<UserInterface | null | undefined>(undefined)

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

  logout(): Observable<void>{
    const promise = signOut(this.firebaseAuth);
    return from(promise);
  }
}