import { Component, OnInit } from '@angular/core';
import {Observable, ConnectableObservable, Subscription, from, Subject} from 'rxjs';
import { multicast } from 'rxjs/operators';


@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.scss']
})
export class TempComponent implements OnInit {

  source: Observable<any>;
  subject = new Subject();
  multicasted: ConnectableObservable<any>;

  constructor() {
    this.source = from([1, 2, 3]);
    this.multicasted = (this.source.pipe(multicast(this.subject))) as ConnectableObservable<any>;
  }


  ngOnInit(): void {
    // These are, under the hood, `subject.subscribe({...})`:
    this.multicasted.subscribe({
      next: (v) => console.log(`observerA: ${v}`)
    });
    this.multicasted.subscribe({
      next: (v) => console.log(`observerB: ${v}`)
    });

// This is, under the hood, `source.subscribe(subject)`:
    this.multicasted.connect();
  }

}




