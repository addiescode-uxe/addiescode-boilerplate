import {
  createEntityAdapter,
  createSlice,
  EntityState,
  PayloadAction,
  createReducer,
  AnyAction,
} from '@reduxjs/toolkit';
import { TodosItem } from 'models/todos/todos.model';

// CRUD 관련 prebuilt reducer 모듈이 필요한 경우 createEntityAdapter를 써줄 수 있다.

// EntityState

/**
 * TodosState
 * {
 *   ids: [],
 *   entities: {}
 * }
 */

export interface TodosState extends EntityState<TodosItem> {
  todos: TodosItem[];
}

export const todosAdapter = createEntityAdapter<TodosItem>();

export const initialState: TodosState = todosAdapter.getInitialState({
  todos: [],
});

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    loadTodos: todosAdapter.setAll,
    addTodos: todosAdapter.addOne,
    updateTodos: todosAdapter.updateOne,
    removeOne: todosAdapter.removeOne,
  },
});

// entityAdapter 없이 createReducer만 활용할 경우

// export const todoReducer = createReducer(initialState, builder => {
//   builder
//     .addCase(addTodos, (state, action) => {
//       state.todos = [...state.todos, action.payload];
//     })
//     .addCase(deleteTodos, (state, action) => {
//       state.todos = state.todos.filter(item => item.id === action.payload.id);
//     })
//     .addCase(modifyContents, (state, action) => {
//       state.todos.map(item => {
//         if (item.id === action.payload.id) {
//           item.body = action.payload.body;
//         }
//       });
//     });
// });

export const {
  loadTodos,
  addTodos,
  updateTodos,
  removeOne,
} = todoSlice.actions;
export default todoSlice.reducer;
