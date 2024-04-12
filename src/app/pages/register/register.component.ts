import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  userLogged: boolean = false;

  userRegister: boolean = false;

  loginForm!: FormGroup;
  registerForm!: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
  ) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
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
