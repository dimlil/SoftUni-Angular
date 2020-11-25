import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-name-input',
  templateUrl: './name-input.component.html',
  styleUrls: ['./name-input.component.css']
})
export class NameInputComponent{

  inputValue = "dummy value";

  @Input() inputVal="Default";
  @Output() btnClick=new EventEmitter();

  constructor() { }


  btnClickHandle(value:string):void {
    console.log('button was clicked',value);
    this.btnClick.emit({value});
  }
  keyUpHandler(event:KeyboardEvent):void{
    //console.log(event);
    this.inputValue=(event.target as HTMLInputElement).value;
  }
}
