import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sandbox';
  clickCount = 0
  clickText = "unclicked"

  clickHandler = ($event: Event) => {
    this.clickCount++
    this.clickText = `Button clicked ${this.clickCount} times`
  }

}
