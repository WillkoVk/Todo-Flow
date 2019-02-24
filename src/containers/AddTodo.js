// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import moment from 'moment';

import { addTodo } from '../actions/todos';
import FieldWrapper from '../components/FieldWrapper';

import type { Dispatch, State } from '../types';
import type { TodosAction, TodoFormType, Todos } from '../types/todos';

export type Props = {
  addNewTodo: (TodoFormType) => TodosAction,
  allTodos: Todos
};

const initialTodoState = {
  title: '',
  description: '',
  priority: 'Middle',
  start: moment().format('YYYY-MM-DD')
};

const titleNotUnique = (title: string, todos: Todos): boolean => {
  const allTitles = todos.map(todo => todo.title);
  return allTitles.some(existingTitle => existingTitle === title);
};

const prepareTodoForSave = (todo: TodoFormType): TodoFormType => {
  const title = todo.title.trim();
  const description = todo.description.trim();
  return {...todo, title, description};
};

class AddTodo extends Component<Props> {
  handleSubmitting = (values, { setSubmitting, resetForm }) => {
    const { props } = this;
    props.addNewTodo(prepareTodoForSave(values));
    setSubmitting(false);
    resetForm(initialTodoState);
  };

  validation = (values: TodoFormType) => {
    const {allTodos} = this.props;
    const title = values.title.trim();
    const description = values.description.trim();
    const errors = {};

    if (!title) {
      errors.title = 'Title is required';
    } else if (titleNotUnique(title, allTodos)) {
      errors.title = 'Title must be unique';
    }

    if (description && description.length > 100) {
      errors.description = 'Description is too long';
    }

    return errors;
  };

  render() {
    const { handleSubmitting, validation } = this;

    return (
      <Formik
        initialValues={initialTodoState}
        onSubmit={handleSubmitting}
        validate={validation}
      >
        {({
            values,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit
          }) => (
          <form onSubmit={handleSubmit}>
            <FieldWrapper fieldName="title" label="Task title" withValidation>
              <input
                type="text"
                id="title"
                value={values.title}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="E.g. Adopt an owl"
              />
            </FieldWrapper>
            <FieldWrapper fieldName="description" label="Description" withValidation>
              <textarea
                id="description"
                value={values.description}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Adopting an owl is a very difficult task"
              />
            </FieldWrapper>
            <FieldWrapper fieldName="priority" label="Task priority">
              <select id="priority"
                      value={values.priority}
                      onChange={handleChange}
                      onBlur={handleBlur}>
                <option value="Low">Low</option>
                <option value="Middle">Middle</option>
                <option value="High">High</option>
              </select>
            </FieldWrapper>
            <FieldWrapper fieldName="start" label="Start date">
              <input type="date" id="start"
                     value={values.start}
                     onChange={handleChange}
                     onBlur={handleBlur}
                     min="2019-01-01"
                     max="2020-12-31"
              />
            </FieldWrapper>
            <button type="submit" disabled={isSubmitting}>Add Todo</button>
          </form>
        )}
      </Formik>
    );
  }
}

const mapStateToProps = (state: State) => ({
  allTodos: state.todos
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addNewTodo: values => dispatch(addTodo(values))
});

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connector(AddTodo);
