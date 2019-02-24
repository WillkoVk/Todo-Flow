// @flow

import type {
  PriorityFilter,
  VisibilityFilterAction
} from '../types/priorityFilter';

export const setVisibilityFilter = (
  filter: PriorityFilter
): VisibilityFilterAction => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  };
};
