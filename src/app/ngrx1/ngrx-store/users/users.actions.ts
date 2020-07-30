import { createAction, props } from '@ngrx/store';
import { IUser } from '@app/interfaces/IUser';

export const loadUsers = createAction('[EntityStore] loadUsers');
export const loadedUsers = createAction(
  '[EntityStore] loadedUsers',
  props<{ users: IUser[] }>()
);
export const selectedUser = createAction(
  '[EntityStore] selectedUser',
  props<{ id: number }>()
);
export const userLoadedError = createAction(
  '[EntityStore] User Loaded Error',
  props<{ id: number }>()
);
