import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AuthenticantionComponent } from './authenticantion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterModule, FontAwesomeModule],
  declarations: [AuthenticantionComponent],
  exports: [AuthenticantionComponent, ReactiveFormsModule, FormsModule],
})
export class AuthenticantionModule {}
