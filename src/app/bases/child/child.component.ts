import {Component, Input, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() inputString = '';
  childNumberProperty = 0;

  @Output() onGoUpParent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }



  goUpParent(number1: number) {
    this.onGoUpParent.emit(number1);
  }
  goUpThis(number1: number) {
    this.childNumberProperty += number1;
  }
}
