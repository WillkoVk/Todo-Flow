// @flow

import type { Id, NewTodo, TodosAction } from '../types/todos';

let nextTodoId: Id = 0; // eslint-disable-line prefer-const

export const addTodo = (todo: NewTodo): TodosAction => {
  return {
    type: 'ADD_TODO',
    payload: {
      ...todo,
      id: nextTodoId++, // eslint-disable-line no-plusplus
    }
  };
};

export const toggleTodo = (id: Id): TodosAction => {
  return {
    type: 'TOGGLE_TODO',
    id
  };
};
