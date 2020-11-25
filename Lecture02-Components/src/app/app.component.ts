import { Component } from '@angular/core';

const users=[
  {
    firstName:"First Name1",
    lastName:"Last Name1",
    age:20
  },
  {
    firstName:"First Name2",
    lastName:"Last Name2",
    age:10
  },
  {
    firstName:"First Name3",
    lastName:"Last Name3",
    age:40
  }
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lecture02-Components';
  isVisible=false;

  nameInputVal="TEST";

  users=users;

  nameInputHandler(data:string){
    console.log(data);
    
  }

  toggleBtn():void{
    this.isVisible=!this.isVisible;
  }
}
