import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { AuthserviceService } from 'src/app/services/authservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  signup=new User();

  constructor(private authService:AuthserviceService,
    private router:Router) { }

  ngOnInit(): void {
  }

  signupUser(){
  
    this.signup.role= "ADMIN" //Admin
    //auth pass signup user
    this.authService.signup(this.signup).subscribe(result => {
      console.log(result);
      this.router.navigate(['/signin']);
    },err =>{
      console.log(err);
      alert(JSON.stringify(err));
    });

  }
}