import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transaction } from '../models/transaction.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  private transactionsUrl = 'http://localhost:3000/transactions'
  
  constructor(private http: HttpClient) {}

  create(data: Transaction): Observable<Transaction>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    return this.http.post<Transaction>(`${this.transactionsUrl}`, data, httpOptions)
  }

  getTransactions(): Observable<Transaction[]>{
    return this.http.get<Transaction[]>(this.transactionsUrl);
  }

  getTransactionsByUserId(userId: string): Observable<Transaction[]> {
    const params = new HttpParams().set('userId', userId);
    return this.http.get<Transaction[]>(this.transactionsUrl, { params });
  }
}
