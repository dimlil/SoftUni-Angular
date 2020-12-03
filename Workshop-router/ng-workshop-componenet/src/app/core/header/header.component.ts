import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  get isLog():boolean{
    return this.userSurvice.isLog;
  }
  constructor(public userSurvice: UserService) { }

  ngOnInit(): void {
  }

  loginHandler() {
    this.userSurvice.login();
  }

  logoutHandler() {
    this.userSurvice.logOut();
  }

}
