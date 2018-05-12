import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { LoginCredentials, UserService } from '../services/user.service';
import { trigger, transition, useAnimation } from '@angular/animations';

import { bounce } from 'ng-animate';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations :[
    trigger('bounce', [transition('* => *', useAnimation(bounce))])
  ],
})
export class LoginComponent implements OnInit {

  formCreds : LoginCredentials = new LoginCredentials();



  constructor(
    public userTruc : UserService,
    private resTruc : Router
  ) { }

  ngOnInit() {
  }

  loginSubmit(){
    this.userTruc.postLogin(this.formCreds)
    .then((result)=>{
      this.resTruc.navigateByUrl('/admin')
    })
    .catch((err)=>{
      console.log("Log in error")
      console.log(err)
    });
  }
}
