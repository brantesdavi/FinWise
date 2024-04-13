import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ItemTransactionComponent } from './item-transaction.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [CommonModule, FontAwesomeModule],
  declarations: [ItemTransactionComponent],
  exports: [ItemTransactionComponent],
})
export class ItemTransactionModule {}
