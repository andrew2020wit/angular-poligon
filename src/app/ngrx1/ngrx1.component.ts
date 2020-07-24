import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as NumberVActions from './ngrx-store/numberV/numberV.actions';

@Component({
  selector: 'app-ngrx1',
  templateUrl: './ngrx1.component.html',
  styleUrls: ['./ngrx1.component.scss'],
})
export class Ngrx1Component {
  numberV$: Observable<number>;
  constructor(private store: Store<{ numberV: number }>) {
    this.numberV$ = store.pipe(select('numberV'));
  }
  AddNumberV(deltaX) {
    this.store.dispatch(NumberVActions.numberVAddAction({ delta: deltaX }));
  }
  ReserNumberV() {
    this.store.dispatch(NumberVActions.numberVReserAction());
  }
}
