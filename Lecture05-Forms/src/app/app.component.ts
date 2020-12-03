import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lecture05-Forms';

  isHighlighted = false;
  togleHighlightHandler() {
    this.isHighlighted = !this.isHighlighted;
  }
}
