// @flow

import React from 'react';
import { connect } from 'react-redux';
import type { State } from '../types';

export type Props = {
  search: (string) => void,
  clear: boolean
};

const FilterByTitle = ({ search }: Props) => {
  return (
    <input
      className="filter-input"
      type="text"
      placeholder="Task"
      onChange={(event: Event) => {
        event.preventDefault();
        // $FlowFixMe
        search(event.target.value.toLowerCase() || '');
      }}
    />
  );
};

const mapStateToProps = (state: State) => ({
  clear: state.visibilityFilter !== "TITLE"
});

const connector = connect(
  mapStateToProps
);

export default connector(FilterByTitle);
