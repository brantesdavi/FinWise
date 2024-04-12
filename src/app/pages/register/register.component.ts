import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { signInWithEmailAndPassword } from '@angular/fire/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
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
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      pass: ['', Validators.required],
      confirmPass: ['', Validators.required],
    });
  }

  onSubmit():void {
    const rawForm = this.registerForm.getRawValue();   
  
    if(rawForm.pass == rawForm.confirmPass){
      this.authService
      .register(rawForm.email, rawForm.username, rawForm.pass)
      .subscribe({
        next: () => {
          this.router.navigateByUrl('/');
        },
        error: (err) => {
          this.errorMessage = err.code;
        }
      });
    }   
    else this.errorMessage = "Password doesn't match"
  }

}
