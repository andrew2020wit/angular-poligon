import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flexboxes',
  templateUrl: './flexboxes.component.html',
  styleUrls: ['./flexboxes.component.scss']
})
export class FlexboxesComponent implements OnInit {

  arr = [];


  constructor() {
    for (let i = 0; i < 50; i++) {
      this.arr[i] = i;
    }

  }

  ngOnInit(): void {
  }

}
