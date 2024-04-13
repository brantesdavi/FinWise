import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { faCoffee  } from '@fortawesome/free-solid-svg-icons';
import { Transaction } from '../../models/transaction.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent{

  faCoffe = faCoffee ;

  totalIncome: number = 0;
  totalSpending: number = 0;
  
  transactions: Transaction[] = []

  constructor( 
    private authService: AuthService,
     private router: Router ){}  

  ngOnInit(): void {
    this.calculeTotal();
  }  

  logout(){
    this.authService.logout();
    this.router.navigate(['']);
  }

  calculeTotal() {
    this.totalIncome = 0;
    this.totalSpending = 0;
  
    this.transactions.forEach(transaction => {
      if (transaction.spendOrIncome) {
        this.totalIncome += transaction.price;
      } else {
        this.totalSpending += transaction.price;
      }
    });
  
    // Ensure two decimal places for both totalIncome and totalSpending
    this.totalIncome = parseFloat(this.totalIncome.toFixed(2));
    this.totalSpending = parseFloat(this.totalSpending.toFixed(2));
  }

  createTransaction(){
    const user = this.authService.currentUserSig()

  }
}
