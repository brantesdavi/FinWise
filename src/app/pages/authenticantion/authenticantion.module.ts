import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AuthenticantionComponent } from './authenticantion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  declarations: [AuthenticantionComponent],
  exports: [AuthenticantionComponent, ReactiveFormsModule, FormsModule],
})
export class AuthenticantionModule {}
