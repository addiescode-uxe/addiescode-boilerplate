import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';
import logger from 'redux-logger';
import counterReducer from './counter/counter.module';
import todosReducer from './todos/todos.module';
import sideMenuReducer from './sideMenu/sideMenu.reducer';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

const rootReducers = {
  sideMenu: sideMenuReducer,
  counter: counterReducer,
  todos: todosReducer,
};

export const reducers = combineReducers({
  router: connectRouter(history),
  ...rootReducers,
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
