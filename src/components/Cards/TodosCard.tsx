import React from 'react';
import { Card } from 'antd';
import { TodosItem } from '../../models/todos/todos.model';
import { removeOne } from '../../store/todos/todos.module';

import { useDispatch } from 'react-redux';

export interface TodoProps {
  item: TodosItem;
}

const TodosListItem: React.FC<TodoProps> = props => {
  const { item } = props;
  const dispatch = useDispatch();

  const handleRemoveTodos = (id: number) => {
    dispatch(removeOne(id));
  };

  return (
    <Card
      key={item.id}
      title={item.title}
      extra={<button onClick={e => handleRemoveTodos(item.id)}>Remove</button>}
    >
      <p>{item.body}</p>
    </Card>
  );
};

export default TodosListItem;
