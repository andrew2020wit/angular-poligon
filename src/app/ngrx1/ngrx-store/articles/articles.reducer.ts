import { Action, createReducer, on } from '@ngrx/store';
import * as ArticlesAction from './articles.actions';
import { IArticle } from './iarticle';

export interface State {
  articles: IArticle[];
}
export const initialState: State = {
  articles: [{ id: 0, user_id: 0, title: 'none' }],
};

const _reducer = createReducer(
  initialState,
  on(ArticlesAction.deletArticles, () => initialState),
  on(ArticlesAction.getArticles, () => {
    const st: State = {
      articles: [
        { id: 1, user_id: 1, title: 'title1' },
        { id: 2, user_id: 2, title: 'title2' },
      ],
    };
    return st;
  })
);

export function reducer(state: State | undefined, action: Action) {
  return _reducer(state, action);
}
