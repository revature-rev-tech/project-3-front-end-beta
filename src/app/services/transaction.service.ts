import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Transaction } from '../models/transaction.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  baseUrl = "http://ec2-50-16-74-43.compute-1.amazonaws.com:7777/api/transaction";

  constructor(private http: HttpClient) { }

  sendTransaction(transaction: Transaction): Observable<Transaction> {
    return this.http.post<Transaction>(this.baseUrl, transaction);
  }


}
