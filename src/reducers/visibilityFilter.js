// @flow

import type { PriorityFilter } from '../types/priorityFilter';
import type { Action } from '../types';

const visibilityFilter = (
  state: PriorityFilter = 'SHOW_ALL',
  action: Action
): PriorityFilter => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;
