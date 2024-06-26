import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticantionModule } from './pages/authenticantion/authenticantion.module';
import { HttpClientModule } from '@angular/common/http';
import { RegisterModule } from './pages/register/register.module';
import { AuthService } from './services/auth.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconsModule } from './icons/icons.module';
import { HomeModule } from './pages/home/home.module';
import { TransactionsService } from './services/transactions.service';
import { NavBarModule } from './components/nav-bar/nav-bar.module';
import { CreateTransactionModule } from './pages/create-transaction/create-transaction.module';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    ReactiveFormsModule, 
    FormsModule, 
    AuthenticantionModule, 
    HomeModule,
    CreateTransactionModule,
    RegisterModule,
    HttpClientModule,
    IconsModule, 
    FontAwesomeModule,
    NavBarModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [TransactionsService]
})
export class AppComponent implements OnInit{
  title = 'finwise';

  constructor( private auth: AuthService){}

  ngOnInit(): void {
    this.auth.user$.subscribe(user => {
      if(user){
        this.auth.currentUserSig.set({
          userId: user.uid,
          email: user.email!,
          username: user.displayName!,
        });
      } else {
        this.auth.currentUserSig.set(null);
      }
    })
  }

  
 




}
