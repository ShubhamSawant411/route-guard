import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

type User = {
  username: string;
  password: string;
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  private url = 'http://localhost:3000/userDetail';
  user: User = {
    username: '',
    password: ''
  };
  isLogin:boolean = false;
  obj?: Array<User> = [];
  registrationStatus: string = '';

  

   loadUsers() {
      
      return this.http.get<Array<User>>(this.url)
         
  }

  registerUser(username: string, password: string) {
    this.user = { username, password };
    this.http.post<User>(this.url, this.user).subscribe();
    
    console.log(this.obj);
  }
  
}