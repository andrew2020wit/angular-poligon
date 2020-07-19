import { Component, OnInit } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { interval, Subscription } from 'rxjs';
@Component({
  selector: 'app-life-cycle',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.scss'],
  animations: [
    trigger('trigger1', [
      state('redState', style({ background: 'red' })),
      state(
        'bigGreenState',
        style({ background: 'green', transform: 'scale(2)' })
      ),
      state(
        'borderRadius',
        style({
          background: 'yellow',
          borderRadius: '50%',
          transform: 'scale(0.5)',
        })
      ),
      transition('redState <=> *', animate(2000)),
      transition('bigGreenState <=> *', animate(2000)),
      transition('borderRadius <=> *', animate(2000)),
      transition('void => *', [
        style({ opacity: 0 }),
        animate('1.2s', style({ opacity: 1 })),
      ]),
      transition('* => void', [animate('1.2s', style({ opacity: 0 }))]),
    ]),
  ],
})
export class AnimationsComponent implements OnInit {
  curState = 'redState';
  ngForStat = false;
  ngIfStat = false;
  arr = [];
  interval1: Subscription;

  constructor() {}

  ngOnInit(): void {}

  setRedState() {
    this.curState = 'redState';
  }

  setBigGreenState() {
    this.curState = 'bigGreenState';
  }

  ngForChange() {
    if (this.ngForStat) {
      this.ngForStat = false;
      this.arr = [];
      this.interval1.unsubscribe();
    } else {
      this.ngForStat = true;
      this.interval1 = interval(1000).subscribe((value) => {
        this.arr.push(value);
        if (value > 5) {
          this.interval1.unsubscribe();
        }
      });
    }
  }
}
