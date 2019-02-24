// @flow

import type { Todos, Todo, Id } from '../types/todos';
import type { Action } from '../types';

const createTodo = (NewTodo): Todo => ({
  ...NewTodo,
  completed: false
});

const toggleTodo = (todos: Todos, id: Id): Todos =>
  todos.map(t => (t.id !== id ? t : { ...t, completed: !t.completed }));

const removeTodo = (todos: Todos, id: Id): Todos =>
  todos.filter(t => t.id !== id);

const todos = (state: Todos = [], action: Action): Todos => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, createTodo(action.payload)];
    case 'TOGGLE_TODO':
      return toggleTodo(state, action.id);
    case 'REMOVE_TODO':
      return removeTodo(state, action.id);
    default:
      return state;
  }
};

export default todos;
