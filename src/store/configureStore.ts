import { configureStore, combineReducers } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import counterReducer from './counter/counter.module';
import sideMenuReducer from './sideMenu/sideMenu.reducer';

export const reducers = combineReducers({
  sideMenu: sideMenuReducer,
  counter: counterReducer,
});

export type RootState = ReturnType<typeof reducers>;

const isDev = process.env.NODE_ENV === 'development';

const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware => {
    return isDev
      ? getDefaultMiddleware().concat(logger)
      : getDefaultMiddleware();
  },
});

if (isDev && module.hot) {
  module.hot.accept('./', () => {
    const newRootReducer = require('./').default;
    store.replaceReducer(newRootReducer);
  });
}

export type AppDispatch = typeof store.dispatch;

export default store;
