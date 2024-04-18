import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { IncomeSectionComponent } from './income-section.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DatepickerModule } from '../datepicker/datepicker.module';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormsModule, FontAwesomeModule, DatepickerModule],
  declarations: [IncomeSectionComponent],
  exports: [IncomeSectionComponent],
})
export class IncomeSectionModule {}
