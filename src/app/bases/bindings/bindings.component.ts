import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.scss'],
})
export class BindingsComponent implements OnInit {
  componentName = 'app-bindings';
  massage1 = 'Showing component properties with interpolation';
  isDisabled = true;
  backgroundColor = 'green';
  clickArray: string[] = [];
  ngModelVar = 'any';
  constructor() {}

  ngOnInit(): void {}

  onClick1($event: MouseEvent) {
    this.clickArray.push('click!');
  }
}
