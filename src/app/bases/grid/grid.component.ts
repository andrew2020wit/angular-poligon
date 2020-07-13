import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  items = [];
  itemNumber = 8;
  minItemNumber = 2;
  maxItemNumber = 50;
  itemText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, molestias!';

  gridTC = 'auto auto auto';
  gridTR = 'auto auto auto';


  constructor() {}

  ngOnInit(): void {
    this.setItems();
  }

  setItems(){
    this.items = [];
    for (let i = 0; i < this.itemNumber; i++) {
      this.items[i] = i;
    }
  }
  setItemNumber(){
    if (this.itemNumber < this.minItemNumber) { this.itemNumber = this.minItemNumber; }
    if (this.itemNumber > this.maxItemNumber) { this.itemNumber = this.maxItemNumber; }
    this.setItems();
  }


}
