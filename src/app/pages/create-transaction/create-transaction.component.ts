import { Component } from '@angular/core';

@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
})
export class CreateTransactionComponent {

  expenseOrIncome: boolean = false;

  expenseOrIncomeToggle(){
    this.expenseOrIncome = !this.expenseOrIncome
  }

}
