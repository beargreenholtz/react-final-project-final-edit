import React from 'react';

import StoryItem from './StoryItem';

const StoriesList = (props) => {
  return (
    <ul>
      {/* <h1>{props.who}</h1> */}
      <StoryItem>{props.children}</StoryItem>
    </ul>
  );
};

export default StoriesList;
