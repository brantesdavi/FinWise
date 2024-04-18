import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Transaction } from '../../models/transaction.interface';
import { TransactionsService } from '../../services/transactions.service';

@Component({
  selector: 'app-income-section',
  templateUrl: './income-section.component.html',
})
export class IncomeSectionComponent {

  transactionForm!: FormGroup;
  @Input() userId: string | undefined;

  constructor(private fb: FormBuilder, private transactionService: TransactionsService) {}


  subscription: boolean = false;
  frequencyUnitBool: boolean = true;
  frequencyUnit: any = null ;
  categorySection: boolean = false;

  choosedCategory: any;
  date: Date = new Date();

  ngOnInit(): void {
    this.transactionForm = this.fb.group({
      spendOrIncome: false,
      userId: [this.userId],
      title: ['', Validators.required], // Title is required
      price: ['', Validators.required], // Price is required
      // categoryId: [''], // Optional field, no validation
      // frequency: [''], // Optional field, no validation
    });
  }

  onSubmit() {
    if (this.transactionForm.valid && this.userId) {
      const formValue: Transaction = this.transactionForm.value as Transaction;
      formValue.date = this.date;
      formValue.userId = this.userId;
      this.transactionService.create(formValue)
      .subscribe(
        () => this.transactionForm.reset()
      );      
    }
  } 

  onDateChange(selectedDate: any): void {
    this.date = selectedDate;
  }


}
