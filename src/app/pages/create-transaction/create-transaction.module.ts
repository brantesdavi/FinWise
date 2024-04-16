import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CreateTransactionComponent } from './create-transaction.component';
import { IncomeSectionModule } from '../../components/income-section/income-section.module';
import { ExpenseSectionModule } from '../../components/expense-section/expense-section.module';


@NgModule({
  imports: [CommonModule, IncomeSectionModule, ExpenseSectionModule],
  declarations: [CreateTransactionComponent],
  exports: [CreateTransactionComponent],
})
export class CreateTransactionModule {}
