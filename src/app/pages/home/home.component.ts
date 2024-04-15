import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { faCoffee  } from '@fortawesome/free-solid-svg-icons';
import { Transaction } from '../../models/transaction.interface';
import { TransactionsService } from '../../services/transactions.service';
import { UserInterface } from '../../models/user.interface';
import { Observable } from 'rxjs';
import { error } from 'console';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent{

  faCoffe = faCoffee ;

  totalIncome: number = 0;
  totalSpending: number = 0;
  
  transactions: Transaction[] = [];
  userId: string | undefined;

  constructor( 
    private authService: AuthService,
    private router: Router, 
    private transactionService: TransactionsService 
  ){}  

  ngOnInit(): void {
    const userId = this.getIdUser();
    // this.calculeTotal();
    // this.createTransaction();
    this.fetchTransactionsByUserId();

    console.log(this.userId);
  }  

  logout(){
    this.authService.logout();
    this.router.navigate(['']);
  }

  // calculeTotal() {
  //   this.totalIncome = 0;
  //   this.totalSpending = 0;
  
  //   this.transactions.forEach(transaction => {
  //     if (transaction.spendOrIncome) {
  //       this.totalIncome += transaction.price;
  //     } else {
  //       this.totalSpending += transaction.price;
  //     }
  //   });
  
  //   // Ensure two decimal places for both totalIncome and totalSpending
  //   this.totalIncome = parseFloat(this.totalIncome.toFixed(2));
  //   this.totalSpending = parseFloat(this.totalSpending.toFixed(2));
  // }

  createTransaction(): void {

    if(this.userId){
      const data = {
        "spendOrIncome": true,
        "category": "Groceries",
        "title": "TESTE3",
        "price": 50,
        "date": new Date(),
        "userId": this.userId
      }
      
      this.transactionService.create(data).subscribe({
        next: res => console.log(res),
        error: er => console.error('Erro ao enviar dados para o backend:', er)
      })
    }  
  }

  fetchTransactionsByUserId(): void {
    try {
      if (!this.userId) {
        throw new Error('User Id not available');
      }
  
      this.transactionService.getTransactionsByUserId(this.userId).subscribe({
        next: (res) => {
          this.transactions = res;
        },
        error: (er) => {
          console.error('Error trying to find the transactions', er);
        }
      });
    } catch (er) {
      console.error('Error trying to find the transactions', er);
    }
  }
  

  getIdUser(): void{
    const user = this.authService.currentUserSig();
    if(user){
      this.userId = user.userId;
    }
    else console.log("Theres no user logged")
  }
}
