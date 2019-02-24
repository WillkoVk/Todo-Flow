// @flow

import React, { type Node } from 'react';

const EmptyList = (): Node => (
  <div className="empty-state">
    <p>Either you have done everything already or there are still things to add to your list. Add your first
      todo &#x2193;</p>
  </div>
);

export default EmptyList;