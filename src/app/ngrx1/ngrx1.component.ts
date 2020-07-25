import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as NumberVActions from './ngrx-store/numberV/numberV.actions';
import * as UsersAction from './ngrx-store/users/users.actions';
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
  AddNumberV(delta) {
    this.store.dispatch(NumberVActions.numberVAddAction({ delta }));
  }
  ReserNumberV() {
    this.store.dispatch(NumberVActions.numberVReserAction());
  }
  setUser() {
    this.store.dispatch(
      UsersAction.userSet({ user: { userId: 1, name: 'Bob', count: 12 } })
    );
  }
  resetUser() {
    this.store.dispatch(UsersAction.userReset());
  }
}
