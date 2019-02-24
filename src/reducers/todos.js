// @flow

import type { Todos, Todo, Id } from '../types/todos';
import type { Action } from '../types';

const createTodo = (NewTodo): Todo => ({
  ...NewTodo,
  completed: false
});

const toggleTodo = (todos: Todos, id: Id): Todos =>
  todos.map(t => (t.id !== id ? t : { ...t, completed: !t.completed }));

const todos = (state: Todos = [], action: Action): Todos => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, createTodo(action.payload)];
    case 'TOGGLE_TODO':
      return toggleTodo(state, action.id);
    default:
      return state;
  }
};

export default todos;
