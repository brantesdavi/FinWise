import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
})
export class CreateTransactionComponent {

  expenseOrIncome: boolean = true;
  userId: string | undefined;

  constructor(private authService: AuthService){}

  ngOnInit(): void {
    this.getIdUser();
  }

  expenseOrIncomeToggle(){
    this.expenseOrIncome = !this.expenseOrIncome
  }

  getIdUser(): void{
    const user = this.authService.currentUserSig();
    if(user){
      this.userId = user.userId;
    }
    else console.log("Theres no user logged")
  }

}
