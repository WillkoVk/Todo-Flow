// @flow

import type {
  TitleFilterAction
} from '../types/filter';

export const setTitleFilter = (
  filter: string
): TitleFilterAction => {
  return {
    type: 'SET_TITLE_FILTER',
    filter
  };
};