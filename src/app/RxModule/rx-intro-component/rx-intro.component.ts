import {Component, OnInit, ViewChild} from '@angular/core';
import {interval, Observable, range, Subscription, fromEvent, of, from, Subject, concat, merge} from 'rxjs';
import {map, scan, filter, take} from 'rxjs/operators';
import {LogBoxComponent} from '../../gui-elements/log-box/log-box.component';

@Component({
  selector: 'app-rxcomponent',
  templateUrl: './rx-intro.component.html',
  styleUrls: ['./rx-intro.component.scss']
})
export class RxIntroComponent implements OnInit {

  @ViewChild(LogBoxComponent, {static: false})
  private logBox: LogBoxComponent;

  mouseScreenX = 0;
  mouseScreenY = 0;

  intervalStream$: Observable<number>;
  subscriptionIntervalStream: Subscription;
  subscriptionSubjectMain: Subscription;
  currentIntervalValue = 0;
  currentSubjectValue = 0;

  isSubscribeIntervalStream = false;
  isSubjectStream = false;

  subject = new Subject<number>();

  showMapPipe = false;
  showScanPipe = false;
  showFilterPipe = false;
  showMapPipe4 = false;
  showMapPipe5 = false;
  showMapPipe6 = false;


  constructor() {

    fromEvent(document, 'mousemove').subscribe(ev => {
      this.mouseScreenX = (ev as MouseEvent).screenX;
      this.mouseScreenY = (ev as MouseEvent).screenY;
    });

    this.intervalStream$ = interval(500);


  }

  ngOnInit(): void {
    this.subject.subscribe(value => {
      this.logBox.add({colorBG: '#0FF', source: 'subject.subscribe', message: `value: ${value}`});
      this.currentSubjectValue = value;
    });

    this.subject.pipe(map((value) => value * value )).subscribe(value => {
      if (this.showMapPipe) {
        this.logBox.add({colorBG: '#0CF', source: 'map x*x: ', message: `${value}`});
      }
    });

    this.subject.pipe(scan((inter, curr) => inter + curr, 1000)).subscribe(value => {
      if (this.showScanPipe) {
        this.logBox.add({colorBG: '#0DF', source: 'scan-pipe: ', message: `${value}`});
      }
    });

    this.subject.pipe(filter(vl => (vl % 2) === 0)).subscribe(value => {
      if (this.showFilterPipe) {
        this.logBox.add({colorBG: '#0EF', source: 'filter vl % 2: ', message: `${value}`});
      }
    });

  }

  subscribeIntervalStream() {

    if (!this.isSubscribeIntervalStream) {
      this.subscriptionIntervalStream = this.intervalStream$
        .subscribe(
          (value) => {
            this.logBox.add({source: 'subscribeIntervalStream', colorBG: 'yellow', message: `value: ${value}`});
            this.currentIntervalValue = value;
          });
    }
  }

  stopSubscribeIntervalStream(){
    if (this.isSubscribeIntervalStream) {
      this.subscriptionIntervalStream.unsubscribe();
      this.currentIntervalValue = 0;
    }
  }

  changeSubscribeIntervalStream() {

    if (this.isSubscribeIntervalStream) { this.stopSubscribeIntervalStream(); }
    else { this.subscribeIntervalStream(); }

    this.isSubscribeIntervalStream = !this.isSubscribeIntervalStream;

  }

  ofHello() {
    of(...('Hello!'.split(''))).subscribe(value => {
      this.logBox.add({source: 'ofHello()', colorBG: '#0E0', message: `value: ${value}`});
    });
  }

  fromGoodBye(){
    from('GoodBye!').subscribe(value => {
      this.logBox.add({source: 'fromGoodBye()', colorBG: '#0F0', message: `value: ${value}`});
    });

  }

  changeSubjectStream() {

    if (!this.isSubjectStream) {
      this.subscriptionSubjectMain = interval(500).subscribe(this.subject);
      this.isSubjectStream = true;
    } else {
      this.subscriptionSubjectMain.unsubscribe();
      this.isSubjectStream = false;
      this.currentSubjectValue = 0;
    }



  }

  concat1() {

    concat(
      interval(1000).pipe(take(3)),
      range(100, 3))
      .subscribe( (value) => {
          this.logBox.add({colorBG: '#FF0', source: 'concat', message: `${value}`});
        }
      );

  }

  merge1() {
    merge(
      interval(1000).pipe(take(3)),
      range(100, 3))
      .subscribe( (value) => {
          this.logBox.add({colorBG: '#FD0', source: 'concat', message: `${value}`});
        }
      );
  }
}
