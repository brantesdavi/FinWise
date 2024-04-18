import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ExpenseSectionComponent } from './expense-section.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatepickerModule } from '../datepicker/datepicker.module';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormsModule, FontAwesomeModule, DatepickerModule],
  declarations: [ExpenseSectionComponent],
  exports: [ExpenseSectionComponent],
})
export class ExpenseSectionModule {}
