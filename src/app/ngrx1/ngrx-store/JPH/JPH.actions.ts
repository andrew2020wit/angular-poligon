// https://jsonplaceholder.typicode.com/
import { IUser } from '@app/interfaces/IUser';
import { createAction, props } from '@ngrx/store';
export const getUsers = createAction('[JPH] getUsers');
export const getUsersSuccess = createAction(
  '[JPH] getUsersSuccess',
  props<{ payload: { users: IUser[] } }>()
);
export const getUsersError = createAction('[JPH] getUsersError');
