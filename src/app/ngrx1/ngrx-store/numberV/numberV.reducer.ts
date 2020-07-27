import { Action, createReducer, on } from '@ngrx/store';
import * as NumberVActions from './numberV.actions';

export interface State {
  numberV: number;
}

export const initialState: State = { numberV: 0 };

const _reducer = createReducer(
  initialState,
  on(NumberVActions.numberVAddAction, (state, actDelta) => {
    const st: State = { numberV: state.numberV + actDelta.delta };
    return st;
  }),
  on(NumberVActions.numberVReserAction, () => initialState)
);

export function reducer(state: State | undefined, action: Action) {
  return _reducer(state, action);
}
