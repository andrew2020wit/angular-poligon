import { Component, OnInit } from '@angular/core';
import { Person } from '../../classes/person';

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
  names = [new Person(1, 'Ivan'), new Person(2, 'Petr'), new Person(3, 'Alex')];
  ngModelVar = 'any';
  constructor() {}

  ngOnInit(): void {}

  onClick1($event: MouseEvent) {
    this.clickArray.push('click!');
  }
}
