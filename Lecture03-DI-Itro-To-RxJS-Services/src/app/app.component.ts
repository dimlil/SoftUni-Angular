import { Component, Inject} from '@angular/core';
import {API_URL_TOKEN} from "./providers"
import { UserService } from './user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lecture03-DI-Itro-To-RxJS-Services';
  data={
    name:'TEST'
  }
  constructor(@Inject(API_URL_TOKEN) public appURL:string, User:UserService){
    console.log(User);
    
    setTimeout(() => {
      //this.data.name="HELLO";
      this.data={
        name:"HELLO AGAIN!"
      }
      console.log('change');
    }, 4000);
  }
}
