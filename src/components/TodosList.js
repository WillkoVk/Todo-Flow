// @flow

import React from 'react';

import Todo from './Todo';
import FilterByTitle from './FilterByTitle';

import type { Todos, Id, Title } from '../types/todos';

export type Props = {
  todos: Todos,
  onTodoCheck: (id: Id) => void,
  onTitleSearch: (title: Title) => void
};

const TodoList = ({ todos, onTodoCheck, onTitleSearch }: Props) => (
  <table border="1">
    <thead>
    <tr>
      <th>Done</th>
      <th><FilterByTitle search={onTitleSearch} /></th>
      <th>Priority</th>
      <th>Start</th>
      <th>Description</th>
    </tr>
    </thead>
    <tbody>
    {todos.map(todo => (
      <Todo key={todo.id} onClick={() => onTodoCheck(todo.id)} {...todo} />
    ))}
    </tbody>
  </table>
);

export default TodoList;
