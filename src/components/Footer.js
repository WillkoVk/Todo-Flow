// @flow

import React from 'react';

import FilterLink from '../containers/FilterLink';
import { HIGH, MEDIUM, LOW, SHOW_ALL } from '../constants/priority';

const Footer = () => (
  <footer>
    Show: <FilterLink filter={SHOW_ALL}>All</FilterLink>
    {', '}
    <FilterLink filter={HIGH}>High priority</FilterLink>
    {', '}
    <FilterLink filter={MEDIUM}>Medium priority</FilterLink>
    {', '}
    <FilterLink filter={LOW}>Low priority</FilterLink>
  </footer>
);

export default Footer;
