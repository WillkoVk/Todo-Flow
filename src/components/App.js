// @flow

import React from 'react';
import { connect } from 'react-redux';
import type { State } from '../types';
import Footer from './Footer';
import EmptyList from './EmptyList';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

const App = ({withTodos}: Object) => (
  <div>
    <h1 id="todos-label" tabIndex="-1">My TODOList</h1>
      { withTodos ? <VisibleTodoList /> : <EmptyList/> }
    <AddTodo />
    <Footer />
  </div>
);

const mapStateToProps = (state: State) => ({
    withTodos: state.todos.length
});

const connector = connect(
  mapStateToProps
);

export default connector(App);
