import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { HttpMockService } from '@app/services/HttpMock/HttpMock.service';

@Injectable()
export class ArticlesEffects {
  loadArticles$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[EntityStore] loadArticles'),
      mergeMap(() =>
        this.httpMockService.getArticles().pipe(
          map((articlesx) => ({
            type: '[EntityStore] loadedArticles',
            articles: articlesx,
          })),
          catchError(() => of({ type: '[EntityStore] Article Loaded Error' }))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private httpMockService: HttpMockService
  ) {}
}
