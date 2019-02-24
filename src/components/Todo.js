// @flow

import React from 'react';
import type { TodoWithActions } from '../types/todos';

const Todo = ({ title, description, priority, start, onClick, onDelete }: TodoWithActions) => (
  <tr>
    <td>
      <input type="checkbox" id={`todo-${title}`} className="vh" onChange={onClick} />
      <label htmlFor={`todo-${title}`}>
        <span className="tick" />
      </label>
    </td>
    <td>{ title }</td>
    <td><span className="priority">{ priority }</span></td>
    <td>{ start }</td>
    <td>{ description }</td>
    <td><button type="button" onClick={onDelete}>X</button></td>
  </tr>
);

export default Todo;
