import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  fromParentString = 'fromParentString';
  parentNumberProperty = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onGoUpParent2(n1: number) {
    this.parentNumberProperty += n1;
  }
}
