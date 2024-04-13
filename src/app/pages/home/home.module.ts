import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ItemTransactionModule } from '../../components/item-transaction/item-transaction.module';

@NgModule({
  imports: [CommonModule, FontAwesomeModule, ItemTransactionModule],
  declarations: [HomeComponent],
  exports: [HomeComponent],
})
export class HomeModule {}
