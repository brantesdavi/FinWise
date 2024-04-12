import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface Usuario {
  username: string;
  email: string;
  senha: string;
}

@Component({
  selector: 'app-authenticantion',
  templateUrl: './authenticantion.component.html',
})
export class AuthenticantionComponent {

  userLogged: boolean = false;

  userRegister: boolean = false;

  loginForm!: FormGroup;
  registerForm!: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
  ) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      senha: ['', Validators.required],
    });
  }

  onSubmit():void {
    const rawForm = this.registerForm.getRawValue();   
  
    this.authService.register(rawForm.email, rawForm.username, rawForm.senha).subscribe(() => {
      console.log("sucesso")
    })
  }
  
}
