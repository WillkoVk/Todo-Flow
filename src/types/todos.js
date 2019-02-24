// @flow

export type Id = number;
export type Title = string;
export type Description = string;

export type TodoFormType = {|
  title: Title,
  description: Description,
  priority: number,
  start: string,
|};

export type NewTodo = {|
  ...TodoFormType,
  id: Id,
  completed: boolean
|};

export type TodoWithActions = {|
  ...NewTodo,
  onClick: Function,
  onDelete: Function
|};

export type Todo = {
  +id: Id,
  +title: Title,
  +description: Description,
  +priority: number,
  +start: string,
  +completed: boolean
};

export type Todos = Array<Todo>;

export type TodosState = {
  +todos: Todos
};

export type TodosAction =
  | { type: 'ADD_TODO', payload: NewTodo }
  | { type: 'TOGGLE_TODO', +id: Id }
  | { type: 'REMOVE_TODO', +id: Id };
