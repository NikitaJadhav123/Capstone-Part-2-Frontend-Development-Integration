import { Injectable } from '@angular/core';
import * as Rx from "rxjs/Rx";
import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Product } from '../model/product';
@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  constructor(private httpClient: HttpClient) { }

  getProducts() {
    return this.httpClient.get('http://localhost:8888/productapp/v1/products').
        pipe(
           map((data: Product[]) => {
             return data;
           }), catchError( error => {
             return throwError( 'Something went wrong!' );
           })
        )
    }

    getProductsC() {
      return this.httpClient.get('http://localhost:8888/productapp/v1/products/category').
          pipe(
             map((data: Product[]) => {
               return data;
             }), catchError( error => {
               return throwError( 'Something went wrong!' );
             })
          )
      }

      getProductByCategory(category: String) {
        const url = `${'http://localhost:8888/productapp/v1/products/category'}/${category}`;
        return this.httpClient.get(url).
        pipe(
          map((data: Product[]) => {
            return data;
          }), catchError( error => {
            return throwError( 'Something went wrong!' );
          })
       )

        }
}
