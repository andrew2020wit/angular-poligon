import { ActionReducer, MetaReducer } from '@ngrx/store';

const ngrxLogOn = true;

// console.log all actions
export function ngrxLog(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    if (ngrxLogOn) {
      console.log('MetaReducer:ngrxLog:state', state);
      console.log('MetaReducer:ngrxLog:action', action);
    }

    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<any>[] = [ngrxLog];
