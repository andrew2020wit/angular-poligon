import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { JsonPlaceholderService } from '@@app/services/json-placeholder.service';

@Injectable()
export class JPHEffects {
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[JPH] getUsers'),
      mergeMap(() =>
        this.jsonPlaceholderService.getUsers().pipe(
          map((users) => ({
            type: '[JPH] getUsersSuccess',
            payload: { users },
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private jsonPlaceholderService: JsonPlaceholderService
  ) {}
}
