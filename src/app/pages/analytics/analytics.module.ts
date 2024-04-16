import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AnalyticsComponent } from './analytics.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AnalyticsComponent],
  exports: [AnalyticsComponent],
})
export class AnalyticsModule {}
