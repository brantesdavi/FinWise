import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';

import { DatepickerComponent } from './datepicker.component';
import { FormsModule } from '@angular/forms';
import { DateMonthPipe } from '../../pipes/date-month-pipe';
import { PipesModule } from '../../pipes/pipes.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [CommonModule, FormsModule, 
    PipesModule, FontAwesomeModule],
  declarations: [DatepickerComponent],
  exports: [DatepickerComponent],
  providers: [
    DatePipe 
  ]
})
export class DatepickerModule {}
