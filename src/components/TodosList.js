// @flow

import React from 'react';

import Todo from './Todo';

import type { Todos, Id } from '../types/todos';

export type Props = {
  todos: Todos,
  onTodoCheck: (id: Id) => void
};

const TodoList = ({ todos, onTodoCheck }: Props) => (
  <table border="1">
    <thead>
    <tr>
      <th>Done</th>
      <th>Task</th>
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
