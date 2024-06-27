import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

type User = {
  username: string;
  password: string;
};
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data:Array<User>=[];
  constructor(private authService: AuthService, private router: Router){}
  ngOnInit(){
    
    this.authService.loadUsers().subscribe(data=>{
    this.data = data;
    });
  }
onLogin(username: string,password: string) {
  if(this.data.find(users=>users.password===password && users.username===username)){
    this.authService.isLogin = true;
    this.router.navigate(['home']);
  }
  else{
    this.router.navigate(['register'])
  }
}


}
