// @flow

import React from 'react';
import type { TodoWithClick } from '../types/todos';

const Todo = ({ title, description, priority, start, onClick }: TodoWithClick) => (
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
  </tr>
);

export default Todo;
