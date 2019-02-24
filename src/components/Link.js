// @flow

import React, { type Node } from 'react';

export type Props = {
  active: boolean,
  children: Node,
  onClick: () => void
};

const Link = ({ active, children, onClick }: Props) => {
  if (active) {
    return <span>{children}</span>;
  }

  return (
    <button
      type="button"
      onClick={(event: Event) => {
        event.preventDefault();
        onClick();
      }}
    >
      {children}
    </button>
  );
};

export default Link;
