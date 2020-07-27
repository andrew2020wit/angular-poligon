// https://jsonplaceholder.typicode.com/
import { IUserJPH } from './IUserJPH';
import { createAction, props } from '@ngrx/store';
export const getUsers = createAction('[JPH] getUsers');
export const getUsersSuccess = createAction(
  '[JPH] getUsersSuccess',
  props<{ payload: { users: IUserJPH[] } }>()
);
export const getUsersError = createAction('[JPH] getUsersError');
