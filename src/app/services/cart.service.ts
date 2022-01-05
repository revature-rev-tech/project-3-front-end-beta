import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Cart } from '../models/cart.model';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  baseUrl = "http://ec2-50-16-74-43.compute-1.amazonaws.com:7777/api/cart";

  constructor(private http: HttpClient) { }

  updateCartService(cart: Cart): Observable<Cart> {
    return this.http.put<Cart>(this.baseUrl, cart);
  }


  addCartService(cart: Cart): Observable<Cart> {
    return this.http.post<Cart>(this.baseUrl, cart);
  }


}
