import { Component, OnInit } from '@angular/core';
import {
  Observable,
  ConnectableObservable,
  Subscription,
  from,
  Subject,
} from 'rxjs';
import { multicast } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.scss'],
})
export class TempComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  test() {
    fetch('http://localhost:3000/api/userdatas/')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  }
}
