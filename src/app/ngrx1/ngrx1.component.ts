import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as NumberVActions from './ngrx-store/numberV/numberV.actions';
import * as UsersAction from './ngrx-store/users/users.actions';
import * as rootReducer from './ngrx-store/index';
@Component({
  selector: 'app-ngrx1',
  templateUrl: './ngrx1.component.html',
  styleUrls: ['./ngrx1.component.scss'],
})
export class Ngrx1Component {
  numberV$: Observable<number>;
  constructor(private store: Store<rootReducer.State>) {
    this.numberV$ = store.pipe(select(rootReducer.selectNumberV));
  }
  AddNumberV(delta) {
    this.store.dispatch(NumberVActions.numberVAddAction({ delta }));
  }
  ReserNumberV() {
    this.store.dispatch(NumberVActions.numberVReserAction());
  }
  setUser() {
    this.store.dispatch(UsersAction.getUsers());
  }
  resetUser() {
    this.store.dispatch(UsersAction.deleteUsers());
  }
}
