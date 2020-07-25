import { createAction, props } from '@ngrx/store';
import { IUsers } from './iuser';
export const getUsers = createAction('[Users] getUser');
export const deleteUsers = createAction('[Users] deleteUsers');
