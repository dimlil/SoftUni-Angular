import { ChangeDetectionStrategy, Component, Inject, Input, OnInit } from '@angular/core';
import {MY_SERVICE,MyService} from "../providers"

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestComponent implements OnInit {
  @Input() obj: {name:string};

  constructor(@Inject(MY_SERVICE) myService:MyService) { 
    this.obj={
      name: ''
    }
    console.log(myService.value)
  }

  ngOnInit(): void {
  }

}
