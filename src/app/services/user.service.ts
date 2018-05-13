import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import 'rxjs/operator/toPromise';



@Injectable()
export class UserService {

  currentUser: User;

  constructor(
    private ajaxTruc : HttpClient
  ) { }

  // GET CHECKLOGIN
  check(){
    return this.ajaxTruc 
    .get('http://localhost:3000/api/checklogin', {withCredentials : true})
    .toPromise()
    .then((apiResponse: any)=>{
      this.currentUser = apiResponse.userInfo;
      return apiResponse;
    })
  }

  // POST SIGNUP
  postSignup(creds : LoginCredentials){
    return this.ajaxTruc
    .post('http://localhost:3000/api/signup', 
    creds,
    {withCredentials : true})
    .toPromise()
    .then((apiResponse: any)=>{
      this.currentUser = apiResponse.userInfo;
      return apiResponse;
    })
  }


  // POST /LOGIN
  postLogin(creds : LoginCredentials){
    return this.ajaxTruc
    .post('http://localhost:3000/api/login', 
    creds,
    {withCredentials : true})
    .toPromise()
    .then((apiResponse: any)=>{
      this.currentUser = apiResponse.userInfo;
      return apiResponse;
    })
  }
  // GET /LOGOUT
  logout(){
    return this.ajaxTruc
    .get('http://localhost:3000/api/logout', {withCredentials : true})
    .toPromise()
    .then((apiResponse: any)=>{
      this.currentUser = apiResponse.userInfo;
      return apiResponse;
    })
  }

}

export class User {
  _id : string; 
  username : string; 
  role : string;
  //? make it optional
  updated_at?: Date ; 
  created_at: Date ; 
}

export class LoginCredentials {
  username : string; 
  password : string;
}