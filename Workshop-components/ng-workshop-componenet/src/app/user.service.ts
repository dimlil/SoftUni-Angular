import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isLog=false;
  constructor() { }
  login(){
    this.isLog=true;
  }
  logOut(){
    this.isLog=false;
  }
}
