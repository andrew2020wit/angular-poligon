import { IArticle } from '@app/interfaces/IArticle';
import {
  Action,
  ActionReducerMap,
  createFeatureSelector,
  props,
} from '@ngrx/store';
import { createSelector } from '@ngrx/store';
import * as fromArticles from './articles/articles.reducer';
import * as fromUsers from './users/users.reducer';
import { UsersEffects } from './users/users.effects';
import { ArticlesEffects } from '@ngrxStore/articles/articles.effects';

import {
  DEFAULT_ROUTER_FEATURENAME,
  routerReducer,
  RouterReducerState,
} from '@ngrx/router-store';

export interface State {
  articles: fromArticles.State;
  users: fromUsers.State;
  [DEFAULT_ROUTER_FEATURENAME]: RouterReducerState;
}

export const reducers: ActionReducerMap<State> = {
  articles: fromArticles.reducer,
  users: fromUsers.reducer,
  [DEFAULT_ROUTER_FEATURENAME]: routerReducer,
};

// Selectors Users

export const selectUsersState = createFeatureSelector<fromUsers.State>('users');
// export const selectUserIds = createSelector(
//   selectUsersState,
//   fromUsers.selectUserIds // shorthand for usersState => fromUser.selectUserIds(usersState)
// );
export const selectUserEntities = createSelector(
  selectUsersState,
  fromUsers.selectUserEntities
);
export const selectAllUsers = createSelector(
  selectUsersState,
  fromUsers.selectAllUsers
);
// export const selectUserTotal = createSelector(
//   selectUsersState,
//   fromUsers.selectUserTotal
// );
export const selectCurrentUserId = createSelector(
  selectUsersState,
  fromUsers.getSelectedUserId
);

export const selectCurrentUser = createSelector(
  selectUserEntities,
  selectCurrentUserId,
  (userEntities, userId) => userEntities[userId]
);

// Selectors Articles ==================
export const selectArticlesState = createFeatureSelector<fromArticles.State>(
  'articles'
);
// export const selectArticleIds = createSelector(
//   selectArticlesState,
//   fromArticles.selectArticleIds // shorthand for articlesState => fromArticle.selectArticleIds(articlesState)
// );
export const selectArticleEntities = createSelector(
  selectArticlesState,
  fromArticles.selectArticleEntities
);
export const selectAllArticles = createSelector(
  selectArticlesState,
  fromArticles.selectAllArticles
);
// export const selectArticleTotal = createSelector(
//   selectArticlesState,
//   fromArticles.selectArticleTotal
// );
export const selectCurrentArticleId = createSelector(
  selectArticlesState,
  fromArticles.getSelectedArticleId
);

export const selectCurrentArticle = createSelector(
  selectArticleEntities,
  selectCurrentArticleId,
  (articleEntities, articleId) => articleEntities[articleId]
);
// =====================================
// Effects
export const effectsAll = [UsersEffects, ArticlesEffects];
