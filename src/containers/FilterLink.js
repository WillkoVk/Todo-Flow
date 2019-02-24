// @flow

import { connect } from 'react-redux';

import { setVisibilityFilter } from '../actions/visibilityFilter';
import Link from '../components/Link';

import type { State, Dispatch } from '../types';
import type { PriorityFilter } from '../types/priorityFilter';

type OwnProps = {
  filter: PriorityFilter
};

const mapStateToProps = (state: State, ownProps: OwnProps) => ({
  active: state.visibilityFilter === ownProps.filter
});

const mapDispatchToProps = (dispatch: Dispatch, ownProps: OwnProps) => ({
  onClick: () => {
    dispatch(setVisibilityFilter(ownProps.filter));
  }
});

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connector(Link);
