import { todosAdapter } from './todos.module';
import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '~store/configureStore';

export const selectTodoListInfo = (state: RootState) => state.todos;
const { selectAll, selectEntities } = todosAdapter.getSelectors();

export const getTodos = createSelector(selectTodoListInfo, selectAll);
