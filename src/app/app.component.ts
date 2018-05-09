import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(
    public userTruc : UserService
  ) {}
  
  ngOnInit(){
    this.userTruc.check()
    .catch((err)=>{
      console.log("App Login error")
      console.log(err)
    });
  }
  
  logoutClick(){
    this.userTruc.logout()
    .catch((err)=>{
      console.log("App Logout Error");
      console.log(err)
    })
  }
  }
  
  


