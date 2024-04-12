import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticantionModule } from './pages/authenticantion/authenticantion.module';
import { HttpClientModule } from '@angular/common/http';
import { RegisterModule } from './pages/register/register.module';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    ReactiveFormsModule, 
    FormsModule, 
    AuthenticantionModule, 
    RegisterModule,
    HttpClientModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'finwise';

  constructor( private auth: AuthService){   
  }
  ngOnInit(): void {
    this.auth.user$.subscribe(user => {
      if(user){
        this.auth.currentUserSig.set({
          email: user.email!,
          username: user.displayName!,
        });
      } else {
        this.auth.currentUserSig.set(null);
      }
    })
  }
}
