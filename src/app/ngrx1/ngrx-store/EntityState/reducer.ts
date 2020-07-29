import { IUser } from '../../../interfaces/IUser';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer } from '@ngrx/store';

export interface IUserEntityState extends EntityState<IUser> {
  currentUser: number | null;
}

export function sortByName(a: IUser, b: IUser): number {
  return a.name.localeCompare(b.name);
}

export const adapter: EntityAdapter<IUser> = createEntityAdapter<IUser>({
  selectId: (item) => item.id, // Необязательно, когда у объекта есть первичный ключ id
  // sortComparer: false, // явное указание, что сортировать массив не нужно
  sortComparer: sortByName,
});

export const initialState: IUserEntityState = adapter.getInitialState({
  // additional entity state properties
  currentUser: null,
});

const userReducer = createReducer(initialState);

export function reducer(state: IUserEntityState | undefined, action: Action) {
  return userReducer(state, action);
}
