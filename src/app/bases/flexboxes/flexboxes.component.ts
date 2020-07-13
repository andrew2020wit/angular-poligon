import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flexboxes',
  templateUrl: './flexboxes.component.html',
  styleUrls: ['./flexboxes.component.scss']
})
export class FlexboxesComponent implements OnInit {

  items = [];
  itemNumber = 3;
  minItemNumber = 2;
  maxItemNumber = 50;
  itemText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, molestias!';

  flexOn =  true;
  wrapSelector = 'wrap';
  justifyContentV = 'flex-start';
  alignitemsV = 'stretch';
  aligncontentV = 'stretch';
  flexDirectionV = 'row';

  constructor() { }

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
