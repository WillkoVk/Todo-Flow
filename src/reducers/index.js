// @flow

import { combineReducers } from 'redux';

import todos from './todos';
import visibilityFilter from './visibilityFilter';
import filterByTitle from './filterByTitle';

export default combineReducers({
  todos,
  visibilityFilter,
  filterByTitle
});
