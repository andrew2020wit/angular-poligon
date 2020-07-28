import { IArticle } from '@app/interfaces/IArticle';
import { Action, ActionReducerMap, props } from '@ngrx/store';
import { createSelector } from '@ngrx/store';
import * as NumberVReducer from './numberV/numberV.reducer';
import * as ArticlesReducer from './articles/articles.reducer';
import * as UsersReducer from './users/users.reducer';
import * as JPHReducer from './JPH/JPH.reducer';
import {
  DEFAULT_ROUTER_FEATURENAME,
  routerReducer,
  RouterReducerState,
} from '@ngrx/router-store';

// import * as ArticlesReducer from './articles/articles.reducer';
export interface State {
  numberV: NumberVReducer.State;
  articles: ArticlesReducer.State;
  users: UsersReducer.State;
  JPH: JPHReducer.State;
  [DEFAULT_ROUTER_FEATURENAME]: RouterReducerState;
}

export const reducers: ActionReducerMap<State> = {
  numberV: NumberVReducer.reducer,
  articles: ArticlesReducer.reducer,
  users: UsersReducer.reducer,
  JPH: JPHReducer.reducer,
  [DEFAULT_ROUTER_FEATURENAME]: routerReducer,
};

export const selectNumberVState = (state: State) => state.numberV;
export const selectArticleState = (state: State) => state.articles;
export const selectUserState = (state: State) => state.users;

export const selectNumberV = createSelector(
  selectNumberVState,
  (state: NumberVReducer.State) => state.numberV
);
export const selectArticles = createSelector(
  selectArticleState,
  (state: ArticlesReducer.State) => state.articles
);
export const selectUsers = createSelector(
  selectUserState,
  (state: UsersReducer.State) => state.users
);
export const selectArticlesByIserId = createSelector(
  selectArticles,
  (articles: IArticle[], { userId }) => {
    return articles.filter((article) => article.user_id === userId);
  }
);
