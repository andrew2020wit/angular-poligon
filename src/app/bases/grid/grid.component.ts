import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  arr = [];

  constructor() {
    for (let i = 0; i < 20; i++) {
      this.arr[i] = 10 ** i;
    }
  }

  ngOnInit(): void {
  }

}
