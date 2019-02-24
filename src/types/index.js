// @flow

import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux';

import type {
  TodosState,
  TodosAction,
} from './todos';
import type {
  VisibilityFilterState,
  VisibilityFilterAction,
  FilterByTitleState,
  TitleFilterAction
} from './filter';


export type ReduxInitAction = { type: '@@INIT' };

export type State = TodosState & VisibilityFilterState & FilterByTitleState;

export type Action = ReduxInitAction | TodosAction | VisibilityFilterAction | TitleFilterAction;

export type Store = ReduxStore<State, Action>;

export type Dispatch = ReduxDispatch<Action>;
