import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { HttpMockService } from '@app/services/HttpMock/HttpMock.service';

@Injectable()
export class UsersEffects {
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[EntityStore] loadUsers'),
      mergeMap(() =>
        this.httpMockService.getUsers().pipe(
          map((usersx) => ({
            type: '[EntityStore] loadedUsers',
            users: usersx,
          })),
          catchError(() => of({ type: '[EntityStore] User Loaded Error' }))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private httpMockService: HttpMockService
  ) {}
}
