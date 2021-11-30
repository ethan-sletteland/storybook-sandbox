import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import ButtonComponent from "../../../stories/button/button.component";

@Component({
  selector: 'app-button-implementation',
  templateUrl: '../../../stories/button/button.component.html',
  styleUrls: ['../../../stories/button/button.css']
})
export class ButtonImplementationComponent extends ButtonComponent implements OnInit {

  //constructor() { }

  ngOnInit(): void {
  }

}
