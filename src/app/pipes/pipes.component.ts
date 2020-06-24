import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  currentDate: Date;
  textInput: string;

  constructor() {
    this.textInput = 'AAA';
    this.currentDate = new Date();
  }

  ngOnInit(): void {
  }

}
