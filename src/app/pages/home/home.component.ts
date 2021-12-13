import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  clickCount = 0
  clickText = "unclicked"

  clickHandler = ($event: Event) => {
    this.clickCount++
    this.clickText = `Button clicked ${this.clickCount} times`
  }

}
