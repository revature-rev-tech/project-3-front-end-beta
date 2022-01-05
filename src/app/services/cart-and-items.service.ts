import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { CartAndItems } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartAndItemsService {

  baseUrl = "http://ec2-50-16-74-43.compute-1.amazonaws.com:7777/api/cart-and-items";

  constructor(private http: HttpClient) { }

  getCartAndItemsService(cartId: number): Observable<CartAndItems>{
    return this.http.get<CartAndItems>(this.baseUrl + "/cart/" + cartId);
  }

  getCartAndItemsWithUserIdService(userId: number): Observable<CartAndItems> {
    return this.http.get<CartAndItems>(this.baseUrl + "/user/" + userId);
  }

}
