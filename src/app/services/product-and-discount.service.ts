import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { ProductAndDiscount } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductAndDiscountService {

  baseUrl = "http://ec2-50-16-74-43.compute-1.amazonaws.com:7777/api/product-discount";

  constructor(private http: HttpClient) { }

  getProductAndDiscountService(productId: number): Observable<ProductAndDiscount> {
    return this.http.get<ProductAndDiscount>(this.baseUrl + "/" + productId);
  }

}
