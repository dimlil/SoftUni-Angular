import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isLog=false;
  constructor(private storige:StorageService) { 
    this.isLog=storige.getItem('isLog')
  }
  login(){
    this.isLog=true;
    this.storige.setItem('isLog',true);
  }
  logOut(){
    this.isLog=false;
    this.storige.setItem('isLog',false);
  }
}
