import { Action, createReducer, on } from '@ngrx/store';
import * as ArticlesAction from '@ngrxStore/articles/articles.actions';
import { IArticle } from '@app/interfaces/IArticle';

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
        { id: 3, user_id: 1, title: 'title3' },
        { id: 4, user_id: 1, title: 'title4' },
        { id: 5, user_id: 2, title: 'title5' },
        { id: 6, user_id: 3, title: 'title6' },
      ],
    };
    return st;
  })
);

export function reducer(state: State | undefined, action: Action) {
  return _reducer(state, action);
}
