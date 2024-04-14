import { EventEmitter, Injectable, inject, signal } from "@angular/core";
import { Auth, User, createUserWithEmailAndPassword, getIdToken, signInWithEmailAndPassword, signOut, updateProfile, user } from "@angular/fire/auth";
import { Observable, first, from, map } from "rxjs";
import { UserInterface } from "../models/user.interface";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
  firebaseAuth = inject(Auth);
  user$ = user(this.firebaseAuth);
  currentUserSig = signal<UserInterface | null | undefined>(undefined)

  loginSuccessEvent: EventEmitter<void> = new EventEmitter<void>();
  private _token: string | null = null;

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

  
  async login(email: string, pass: string): Promise<void> {
    // Realiza o login usando o Firebase Authentication
    await signInWithEmailAndPassword(this.firebaseAuth, email, pass);

    // Após o login bem-sucedido, obtém o token JWT e armazena-o
    this._token = await this.getToken();

    // Emite o evento de login bem-sucedido
    this.loginSuccessEvent.emit();
  }

  async getToken(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      user(this.firebaseAuth)
        .pipe(
          first(), // Emite apenas o primeiro valor e completa
          map(user => {
            if (!user) {
              throw new Error('Usuário não está autenticado');
            }
            return user;
          })
        )
        .subscribe({
          next: (currentUser: User) => {
            getIdToken(currentUser)
              .then(token => resolve(token))
              .catch(err => reject(err));
          },
          error: (err) => reject(err)
        });
    });
  }

  getTokenJWT(): string | null {
    return this._token;
  }

  isLoggedIn(): boolean{
    return true
  }

  logout(): Observable<void>{
    const promise = signOut(this.firebaseAuth);
    return from(promise);
  }
}