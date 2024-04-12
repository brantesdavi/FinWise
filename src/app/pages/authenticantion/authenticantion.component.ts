import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router, RouterLink } from '@angular/router'; 

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

  errorMessage: string | null = null;
  
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      senha: ['', Validators.required],
    });
  }

  onSubmit():void {
    const rawForm = this.loginForm.getRawValue();   
  
    this.authService
      .login(rawForm.email, rawForm.senha)
      .subscribe({
        next: () => {
          this.router.navigateByUrl('/home');
          this.errorMessage = null;
        },
        error: (err) => {
          this.errorMessage = err.code;
        }
      });
  }
  
}
