import React, { useEffect } from 'react';
import TodosListItem from '~components/Cards/TodosCard';
import MainTemplate from '~containers/Main/customs/MainTemplate';
import * as ApiManager from '../../factory/api/apiManager';
import { loadTodos } from '../../store/todos/todos.module';

import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from '~store/todos/todos.selector';
import { TodosItem } from 'models/todos/todos.model';

const TodosListContainer = () => {
  const todos = useSelector(getTodos);
  const dispatch = useDispatch();

  useEffect(() => {
    loadTodoListInfo();
  }, []);

  const loadTodoListInfo = async () => {
    await ApiManager.request<TodosItem[]>(
      {
        url: `${ApiManager.URL_TODO_GET(1)}`,
      },
      res => {
        dispatch(loadTodos(res.data));
      },
      error => {
        console.log(error);
      }
    );
  };

  return (
    <MainTemplate>
      <p>{todos.length} remaining tasks</p>
      {todos.length &&
        todos.map(item => <TodosListItem key={item.id} item={item} />)}
    </MainTemplate>
  );
};

export default TodosListContainer;
