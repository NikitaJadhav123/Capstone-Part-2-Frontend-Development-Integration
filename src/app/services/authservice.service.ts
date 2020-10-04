import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  logout(){
    localStorage.clear();
    this.router.navigate(['/signin']);
  }

  saveUser(user:User){
    localStorage.setItem('token',user.jwtToken);
    localStorage.setItem('user',JSON.stringify(user));
  }

  getToken(){
     return localStorage.getItem('token');
  }

  constructor(private httpClient: HttpClient,
    private router:Router) {  }
 
    signin(credentials){
      //call signin api
      let url = 'http://localhost:8888/productapp/v1/auth/login';
        return this.httpClient.post(url,credentials);
    }

    signup(user){
      //call signup api
      let url = 'http://localhost:8888/productapp/v1/auth/register';
        return this.httpClient.post(url,user);
    }

   private checkLoginStatus():boolean{
      if(this.getToken()===null){
          return false;
      }
      return true;
      
    }

    private loginStatus=new BehaviorSubject(this.checkLoginStatus());
    get isLoggedIn(){
      return this.loginStatus;
    }

 
}
