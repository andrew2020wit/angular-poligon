import { createAction, props } from '@ngrx/store';
import { IArticle } from '@app/interfaces/IArticle';

export const loadArticles = createAction('[EntityStore] loadArticles');
export const loadedArticles = createAction(
  '[EntityStore] loadedArticles',
  props<{ articles: IArticle[] }>()
);
export const selectedArticle = createAction(
  '[EntityStore] selectedArticle',
  props<{ id: number }>()
);
