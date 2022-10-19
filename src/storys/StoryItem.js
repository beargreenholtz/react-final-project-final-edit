import React from 'react';

import Card from '../UI/Card/Card';

const StoryItem = (props) => {
  return (
    <li>
      <Card>{props.children}</Card>
    </li>
  );
};

export default StoryItem;
