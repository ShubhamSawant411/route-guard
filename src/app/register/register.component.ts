import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

type User = {
  username: string;
  password: string;
};
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  tempUser:User={
    username:"",
    password:""
  }
  registrationStatus:string=""
  data:Array<User>=[];
  constructor(private authService: AuthService, private router: Router){
  }
  ngOnInit(){
    this.authService.loadUsers().subscribe(data=>{
    this.data = data;
    });
  }
  
  onSubmit(username: string,password: string) {
    
    if (this.data.find(user => user.username === username)){
      this.registrationStatus = "username already exist"

    }
    else{
      this.authService.registerUser(username,password);
      // this.tempUser.username=username;
      // this.tempUser.password=password;
      // this.data.push(this.tempUser);
      this.router.navigate(['/login']);
      this.registrationStatus = "username added successfully"

    }
  }


}
