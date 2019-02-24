// @flow

import type {
  VisibilityFilter,
  VisibilityFilterAction
} from '../types/filter';

export const setVisibilityFilter = (
  filter: VisibilityFilter
): VisibilityFilterAction => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  };
};
