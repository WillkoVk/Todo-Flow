// @flow

import { createSelector } from 'reselect';

import type { State } from '../types';
import { HIGH, MEDIUM, LOW, SHOW_ALL } from '../constants/priority';

const todosSelector = (state: State) => state.todos;
const visibilityFilterSelector = (state: State) => state.visibilityFilter;

export const visibleTodosSelector = createSelector(
  todosSelector,
  visibilityFilterSelector,
  (todos, visibilityFilter) => {
    switch (visibilityFilter) {
      case HIGH:
        return todos.filter(t => t.priority === HIGH);
      case MEDIUM:
        return todos.filter(t => t.priority === MEDIUM);
      case LOW:
        return todos.filter(t => t.priority === LOW);
      case SHOW_ALL:
      default:
        return todos;
    }
  }
);