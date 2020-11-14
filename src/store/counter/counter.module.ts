import {
  createEntityAdapter,
  createSlice,
  EntityState,
  PayloadAction,
} from '@reduxjs/toolkit';

import { Counter } from '../../models/counter.model';

export interface CounterState extends EntityState<Counter> {
  number: number;
}

export const counterAdapter = createEntityAdapter<Counter>();

export const initialState: CounterState = counterAdapter.getInitialState({
  number: 0,
});

export const counterSlice = createSlice({
  name: 'counters',
  initialState,
  reducers: {
    INCREMENT(state) {
      // action type name: counter/INCREMENT
      state.number++;
    },
    DECREMENT(state) {
      state.number--;
    },
    INCREMENT_BY_AMOUNT(state, action: PayloadAction<number>) {
      state.number += action.payload;
    },
  },
});

export const {
  INCREMENT,
  DECREMENT,
  INCREMENT_BY_AMOUNT,
} = counterSlice.actions;

export default counterSlice.reducer;
