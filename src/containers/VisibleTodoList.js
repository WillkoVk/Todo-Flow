// @flow

import { connect } from 'react-redux';

import { toggleTodo, removeTodo } from '../actions/todos';
import { setTitleFilter } from '../actions/filterByTitle';
import { visibleTodosSelector } from '../selectors';
import TodoList from '../components/TodosList';

import type { State, Dispatch } from '../types';
import { setVisibilityFilter } from '../actions/visibilityFilter';

const mapStateToProps = (state: State) => ({
  todos: visibleTodosSelector(state)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onTodoCheck: id => {
    dispatch(toggleTodo(id));
  },
  onTodoRemove: id => {
    dispatch(removeTodo(id));
  },
  onTitleSearch: title => {
    dispatch(setVisibilityFilter('TITLE'));
    dispatch(setTitleFilter(title));
  }
});

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connector(TodoList);
