import { Component, Input } from '@angular/core';
import { Transaction } from '../../models/transaction.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransactionsService } from '../../services/transactions.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-expense-section',
  templateUrl: './expense-section.component.html',
})
export class ExpenseSectionComponent {
  transactionForm!: FormGroup;
  @Input() userId: string | undefined;

  constructor(private fb: FormBuilder, private transactionService: TransactionsService, private authService: AuthService) {}

  subscription: boolean = false;
  frequencyUnitBool: boolean = true;
  frequencyUnit: any = null ;
  categorySection: boolean = false;

  choosedCategory: any;
  date: Date = new Date();


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
    
    console.log(this.userId)
    this.choosedCategory = this.categories[0]
    this.transactionForm = this.fb.group({
      spendOrIncome: true,
      userId: [this.userId],
      title: ['', Validators.required], // Title is required
      price: ['', Validators.required], // Price is required
      categoryId: [''], // Optional field, no validation
      frequency: [''], // Optional field, no validation
    });
  }

  onSubmit() {
    console.log(this.userId)
    if (this.transactionForm.valid && this.userId) {  
      const formValue: Transaction = this.transactionForm.value as Transaction;
      formValue.userId = this.userId;
      formValue.categoryId = this.choosedCategory.id;
      formValue.date = this.date;
      if(this.subscription){
        if(this.frequencyUnit){
          formValue.frequencyUnit = 'monthly';
        } else formValue.frequencyUnit = 'yearly';
        formValue.frequency = 1;
      }
      this.transactionService.create(formValue)
      .subscribe(
        () => this.transactionForm.reset()
      );      
    }
  }

  onDateChange(selectedDate: any): void {
    this.date = selectedDate;
  }
  

  subscriptionToggle(){
    this.subscription = !this.subscription
  }

  frequencyToggle(){
    this.frequencyUnitBool = !this.frequencyUnitBool
  }

  categorySectionToggle(){
    this.categorySection = !this.categorySection
  }

  chooseCategory(category: any){
    this.choosedCategory = category
  }
}
