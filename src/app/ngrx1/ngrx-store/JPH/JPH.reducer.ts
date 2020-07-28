import { IUser } from '@app/interfaces/IUser';
import { Action, createReducer, on } from '@ngrx/store';
import * as JPHActions from './JPH.actions';

export interface State {
  usersJPH: IUser[];
}
export const initialState: State = {
  usersJPH: [],
};

const _reducer = createReducer(
  initialState,
  on(JPHActions.getUsers, (state) => state),
  on(JPHActions.getUsersSuccess, (state: State, { payload }) => {
    const st: State = { usersJPH: payload.users };
    return st;
  })
);

export function reducer(state: State | undefined, action: Action) {
  return _reducer(state, action);
}
