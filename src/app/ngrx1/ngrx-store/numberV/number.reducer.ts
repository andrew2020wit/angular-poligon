import { Action, createReducer, on } from '@ngrx/store';
import * as NumberVActions from './numberV.actions';

export const initialState = 0;

const numberVReducer = createReducer(
  initialState,
  on(
    NumberVActions.numberVAddAction,
    (state, actDelta) => state + actDelta.delta
  ),
  on(NumberVActions.numberVReserAction, () => initialState)
);

export function reducer(state: number | undefined, action: Action) {
  return numberVReducer(state, action);
}
