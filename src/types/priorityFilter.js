// @flow

import { HIGH, MEDIUM, LOW, SHOW_ALL } from '../constants/priority';

export type PriorityFilter = typeof SHOW_ALL | typeof HIGH | typeof MEDIUM | typeof LOW;

export type VisibilityFilterState = {
  +visibilityFilter: PriorityFilter
};

export type VisibilityFilterAction = {
  type: 'SET_VISIBILITY_FILTER',
  +filter: PriorityFilter
};
