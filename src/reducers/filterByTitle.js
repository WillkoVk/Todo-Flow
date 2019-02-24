// @flow

import type { Action } from '../types';

const filterByTitle = (
  state: string = '',
  action: Action
): string => {
  switch (action.type) {
    case 'SET_TITLE_FILTER':
      return action.filter;
    default:
      return state;
  }
};

export default filterByTitle;
