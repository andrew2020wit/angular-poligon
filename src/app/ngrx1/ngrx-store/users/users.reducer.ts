import { Action, createReducer, on } from '@ngrx/store';
import * as UsersAction from './users.actions';
import { IUsers } from './iusers';

export const initialState: IUsers = { userId: 0, name: 'noName', count: 0 };
const _usersReducer = createReducer(
  initialState,
  on(UsersAction.userReset, () => initialState),
  on(UsersAction.userSet, (_, { user }) => user)
);

export function usersReducer(state: IUsers | undefined, action: Action) {
  return _usersReducer(state, action);
}
