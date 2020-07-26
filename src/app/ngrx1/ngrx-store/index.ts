import { Action, ActionReducerMap } from '@ngrx/store';
import { createSelector } from '@ngrx/store';
import * as NumberVReducer from './numberV/numberV.reducer';
import * as ArticlesReducer from './articles/articles.reducer';
import * as Users from './users/users.reducer';

//import * as ArticlesReducer from './articles/articles.reducer';
export interface State {
  numberV: NumberVReducer.State;
  articles: ArticlesReducer.State;
  users: Users.State;
}

export const reducers: ActionReducerMap<State> = {
  numberV: NumberVReducer.reducer,
  articles: ArticlesReducer.reducer,
  users: Users.reducer,
};

export const selectNumberVState = (state: State) => state.numberV;

export const selectNumberV = createSelector(
  selectNumberVState,
  (state: NumberVReducer.State) => state.numberV
);
