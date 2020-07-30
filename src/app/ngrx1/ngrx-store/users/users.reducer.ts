import { IUser } from '@app/interfaces/IUser';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import * as UsersActions from './users.actions';

export interface State extends EntityState<IUser> {
  // additional entities state properties
  selectedUserId: number;
}

export function sortByName(a: IUser, b: IUser): number {
  return a.name.localeCompare(b.name);
}

export const adapter: EntityAdapter<IUser> = createEntityAdapter<IUser>({
  // selectId: selectUserId,
  sortComparer: sortByName,
});

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  selectedUserId: null,
});

const userReducer = createReducer(
  initialState,
  on(UsersActions.loadUsers, (state) => state),
  on(UsersActions.loadedUsers, (state, { users }) => {
    return adapter.setAll(users, state);
  }),
  on(UsersActions.selectedUser, (state, { id }) => {
    const st: State = { ...state, selectedUserId: id };
    return st;
  })
);

export function reducer(state: State | undefined, action: Action) {
  return userReducer(state, action);
}

export const getSelectedUserId = (state: State) => state.selectedUserId;

// get the selectors
const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

// select the array of user ids
export const selectUserIds = selectIds;

// select the dictionary of user entities
export const selectUserEntities = selectEntities;

// select the array of users
export const selectAllUsers = selectAll;

// select the total user count
export const selectUserTotal = selectTotal;
