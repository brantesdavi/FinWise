import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RegisterComponent } from './register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [RegisterComponent],
  exports: [RegisterComponent],
})
export class RegisterModule {}
