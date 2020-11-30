import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  user: any;
  constructor(
    private UserService: UserService,
    private rooter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // const userId = this.rooter.snapshot.params.id;
    // this.user = this.UserService.loadUser(userId).subscribe(user => {
    //   this.user = user
    // })

    this.rooter.params.subscribe(({id})=>{
    this.user = this.UserService.loadUser(id).subscribe(user => {
      this.user = user
    })
    })
  }

}
