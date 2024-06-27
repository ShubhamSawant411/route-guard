import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  isLogin = false; 

  constructor(private authService: AuthService, private router:Router){
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        console.log(event)
        if (event['url'] == '/login') {
          this.isLogin = false;
        } 
        else if (event['url'] == '/register') {
          this.isLogin = false;
        } 
        else if (event['url'] == '/') {
          this.isLogin = false;
        } 
        else {
          this.isLogin = true;
        }
      }
    });
  }
  //isLogin = this.authService.isLogin
  title = 'auth-guard';
  loginStatus!:string;
  

  ngOnInit(): void {
    console.log("i am called")
  }

  logoutFunc() {
    this.router.navigate(['/login'])
  }
  
  
}