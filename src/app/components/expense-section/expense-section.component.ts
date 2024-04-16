import { Component } from '@angular/core';
import { Transaction } from '../../models/transaction.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-expense-section',
  templateUrl: './expense-section.component.html',
})
export class ExpenseSectionComponent {
  transactionForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  subscription: boolean = false;
  frequency: boolean = true;
  categorySection: boolean = false;

  choosedCategory: any;

  categories: any[] = [
    {
      'title': "food", 
      'icon' : "utensils",
      'id' : 0
    },
    {
      'title': "clothing", 
      'icon' : "shirt",
      'id' : 1
    },
    {
      'title': "bills", 
      'icon' : "file-invoice-dollar",
      'id' : 2
    },
    {
      'title': "transport", 
      'icon' : "car",
      'id' : 3
    },
    {
      'title': "education", 
      'icon' : "graduation-cap",
      'id' : 4
    },
    {
      'title': "entertainment", 
      'icon' : "gamepad",
      'id' : 5
    },
    {
      'title': "investments", 
      'icon' : "piggy-bank",
      'id' : 6
    },
  ]


  ngOnInit() {
    this.choosedCategory = this.categories[0]
    this.transactionForm = this.fb.group({
      spendOrIncome: true,
      title: ['', Validators.required], // Title is required
      price: ['', Validators.required], // Price is required
      date: [new Date(), Validators.required], // Default to today's date, required
      categoryId: [''], // Optional field, no validation

      frequencyPrice: [''], // Optional field, no validation
      endDate: [new Date()], // Default to today's date, required
    });
  }

  onSubmit() {
    if (this.transactionForm.valid) {
      const formValue: Transaction = this.transactionForm.value as Transaction;
      if(this.subscription){
        if(this.frequency){
          formValue.recurrenceUnit = 'monthly'
        } else formValue.recurrenceUnit = 'yearly'
      }
      console.log('Submitted transaction:', formValue);
      // this.transactionForm.reset(); 
    }
  }

  subscriptionToggle(){
    this.subscription = !this.subscription
  }

  frequencyToggle(){
    this.frequency = !this.frequency
  }

  categorySectionToggle(){
    this.categorySection = !this.categorySection
  }

  chooseCategory(category: any){
    this.choosedCategory = category
    this.categorySectionToggle();
  }
}
