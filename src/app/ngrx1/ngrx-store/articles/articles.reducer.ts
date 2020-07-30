import { IArticle } from '@app/interfaces/IArticle';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import * as ArticlesActions from './articles.actions';

export interface State extends EntityState<IArticle> {
  // additional entities state properties
  selectedArticleId: number;
}

export function sortByTitle(a: IArticle, b: IArticle): number {
  return a.title.localeCompare(b.title);
}

export const adapter: EntityAdapter<IArticle> = createEntityAdapter<IArticle>({
  sortComparer: sortByTitle,
});

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  selectedArticleId: null,
});

const _reducer = createReducer(
  initialState,
  on(ArticlesActions.loadArticles, (state) => state),
  on(ArticlesActions.loadedArticles, (state, { articles }) => {
    return adapter.setAll(articles, state);
  }),
  on(ArticlesActions.selectedArticle, (state, { id }) => {
    const st: State = { ...state, selectedArticleId: id };
    return st;
  })
);

export function reducer(state: State | undefined, action: Action) {
  return _reducer(state, action);
}
export const getSelectedArticleId = (state: State) => state.selectedArticleId;

// get the selectors
const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

// select the array of article ids
export const selectArticleIds = selectIds;

// select the dictionary of article entities
export const selectArticleEntities = selectEntities;

// select the array of articles
export const selectAllArticles = selectAll;

// select the total article count
export const selectArticleTotal = selectTotal;
