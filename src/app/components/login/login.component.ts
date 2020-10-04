import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { AuthserviceService } from 'src/app/services/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  

  userName:string;
  password:string;

  constructor(private authService: AuthserviceService,private router:Router) { }

  ngOnInit(): void {
  }  
  
   onSubmit(credentials: NgForm) {
    console.log(credentials);
    console.log(this.userName + ' ' + this.password);
    //call service method, pass params
    this.authService.signin(credentials).subscribe(result => {
      //if success,
      // response -> localstorage
      //Admin -> admin dashboard
      // user ->
    
      let user = result as User;
      console.log(user);

      alert('login successful');
      console.log(result);
      this.authService.saveUser(user);
      this.router.navigate(['/products']);
      if(user.role==="ADMIN"){
        //navigate to admin
        this.router.navigate(['/admin']);
      }
      else{
        //navigate to customer
        this.router.navigate(['/customer']);
      }
      
    }, err => {
      // if fail
      let er=err as HttpErrorResponse;
      console.log(err);
    alert(er.error.errorMessage);
    
    });
  }

}