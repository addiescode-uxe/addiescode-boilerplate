import { counterAdapter } from './counter.module';
import { createSelector } from '@reduxjs/toolkit';
import { reducers, RootState } from '~store/configureStore';

const selectCounterInfo = (state: RootState) => state.counter;
const { selectAll } = counterAdapter.getSelectors();

export const selectAllCounterInfos = createSelector(
  selectCounterInfo,
  selectAll
);

export const selectCurrentNum = createSelector(
  selectCounterInfo,
  state => state.number
);
