import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http:HttpClient) { }

  loadUsers(){
    this.http.get('https://jsonplaceholder.typicode.com/users')
  }
}
