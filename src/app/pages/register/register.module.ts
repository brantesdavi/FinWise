import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RegisterComponent } from './register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterModule],
  declarations: [RegisterComponent],
  exports: [RegisterComponent,  ReactiveFormsModule, FormsModule],
})
export class RegisterModule {}
