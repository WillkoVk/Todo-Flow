// @flow

import { HIGH, MEDIUM, LOW, SHOW_ALL } from '../constants/priority';

export type VisibilityFilter = typeof SHOW_ALL | typeof HIGH | typeof MEDIUM | typeof LOW | 'TITLE';

export type VisibilityFilterState = {
  +visibilityFilter: VisibilityFilter
};

export type FilterByTitleState = {
  +filterByTitle: string
};

export type VisibilityFilterAction = {
  type: 'SET_VISIBILITY_FILTER',
  +filter: VisibilityFilter
};

export type TitleFilterAction = {
  type: 'SET_TITLE_FILTER',
  +filter: string
};
