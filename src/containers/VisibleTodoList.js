// @flow

import { connect } from 'react-redux';

import { toggleTodo } from '../actions/todos';
import { visibleTodosSelector } from '../selectors';
import TodoList from '../components/TodosList';

import type { State, Dispatch } from '../types';

const mapStateToProps = (state: State) => ({
  todos: visibleTodosSelector(state)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onTodoCheck: id => {
    dispatch(toggleTodo(id));
  }
});

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connector(TodoList);
