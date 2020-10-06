import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/model/product';
import * as Rx from "rxjs/Rx";
import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ProductserviceService } from 'src/app/services/productservice.service';
import {MatCardModule} from '@angular/material/card';
import {CommonModule} from "@angular/common";
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  

//  data: any={};


 product : Product[];
  
  constructor(public http: HttpClient, private apiService: ProductserviceService){}

  ngOnInit(){
    this.getProductList();
    this.getProductAList();
    this.getProductBList();
    this.getProductBWList();
  }

  getProductList() {
    this.apiService
    .getProducts()
    .subscribe((data:any) => {
      console.log(data);
      this.product = data;
    });
  }

  getProductAList() {
    this.apiService
    .getProductByCategory("Automotive")
    .subscribe((data:any) => {
      console.log(data);
      this.product = data;
    });
  }

  getProductBList() {
    this.apiService
    .getProductByCategory("Baby care")
    .subscribe((data:any) => {
      console.log(data);
      this.product = data;
    });
  }

  getProductBWList() {
    this.apiService
    .getProductByCategory("Bags ''&'' Wallets  Belts")
    .subscribe((data:any) => {
      console.log(data);
      this.product = data;
    });
  }
  
  
    /*
   getData(){
     return this.httpClient.get(this.apiUrl).map((res:Response) => res.json())
    }

   
  getContacts(){
    this.getData().subscribe(data => {
      console.log(data);
      this.data=data;
    })
  }
*/
}
