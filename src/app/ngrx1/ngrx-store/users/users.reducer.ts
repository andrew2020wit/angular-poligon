import { Action, createReducer, on } from '@ngrx/store';
import * as UsersAction from './users.actions';
import { IUsers } from './iuser';
export interface State {
  users: IUsers[];
}
export const initialState: State = { users: [{ id: 0, name: 'noNameUser' }] };
const _reducer = createReducer(
  initialState,
  on(UsersAction.deleteUsers, () => initialState),
  on(UsersAction.getUsers, () => {
    const st: State = {
      users: [
        { id: 1, name: 'Bob' },
        { id: 2, name: 'Jon' },
        { id: 3, name: 'Dan' },
        { id: 4, name: 'Sam' },
      ],
    };
    return st;
  })
);

export function reducer(state: State | undefined, action: Action) {
  return _reducer(state, action);
}
