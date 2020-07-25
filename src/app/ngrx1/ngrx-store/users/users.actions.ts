import { createAction, props } from '@ngrx/store';
import { IUsers } from './iusers';
export const userSet = createAction(
  '[Users] userSet',
  props<{ user: IUsers }>()
);
export const userReset = createAction('[User] userReset');
