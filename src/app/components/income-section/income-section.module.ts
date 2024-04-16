import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { IncomeSectionComponent } from './income-section.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormsModule, FontAwesomeModule],
  declarations: [IncomeSectionComponent],
  exports: [IncomeSectionComponent],
})
export class IncomeSectionModule {}
