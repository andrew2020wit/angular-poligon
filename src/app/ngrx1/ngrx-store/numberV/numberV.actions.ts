import { createAction, props } from '@ngrx/store';

export const numberVAddAction = createAction(
  '[numberVAction] Add',
  props<{ delta: number }>()
);
export const numberVReserAction = createAction('[numberVAction] Reset');
